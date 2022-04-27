---
author: xlc520
title: 使用 easypoi 导出 excel 实现动态列
description: 使用 easypoi 导出 excel 实现动态列
date: 2022-04-26
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# 使用 easypoi 导出 excel 实现动态列

### 说明

- 使用的是easypoi进行导出
- 行头是动态生成
- 依据key进行列匹配，进行数据填充
- 第一列进行纵向动态合并

### 工具依赖

```xml
<dependency>
    <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-base</artifactId>
   <version>3.2.0</version>
</dependency>
<dependency>
    <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-annotation</artifactId>
   <version>3.2.0</version>
</dependency>
<dependency>
    <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-web</artifactId>
   <version>3.2.0</version>
</dependency>
```

### 实现效果

变更前样式

![图片](https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4csic7r2ZwEQBWEnsC0k4Aaq6alNV28H5Gl7iaAo7NIxRn5liayjQTxCyuA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

变更后样式

![图片](https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4cAUvrUmnGPYnulOgLpRflnhMsedEKSolpnsNMZicckf5ne7WITAIOZsA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 代码解析

##### 动态生成列头



```java
  private List<ExcelExportEntity> dynamicNewAddExcel(Map<String, PlatformStatisParamRespData> paramInfo) {
   //表头的集合，用于添加表头
    List<ExcelExportEntity> entityList = new ArrayList<>();

 //ExcelExportEntity构造参数【第一个是列名头的统计字段,第二个是需要指定的一个key在填充数据的时候是需要根据这个key进行填充值,第三个参数是列宽】
    ExcelExportEntity platformXh = new ExcelExportEntity("统计字段1", "statisKey1", 30);
    //列的合并(纵向列的同名称会进行合并,效果见上图的平台名称的变化)
    platformXh.setMergeVertical(true);
    entityList.add(platformXh);

    ExcelExportEntity statisDateXh = new ExcelExportEntity("统计字段2", "statisKey2", 30);
    entityList.add(statisDateXh);

    //参数信息--[用于动态拼接列头]
    final Iterator<String> iterator = paramInfo.keySet().iterator();
    while (iterator.hasNext()) {
      final String paramKeyStr = iterator.next();
      final String paramNameStr = paramInfo.get(paramKeyStr).getDataName();
      //列头由参数汉字名称,参数key为列key
      entityList.add(new ExcelExportEntity(paramNameStr, paramKeyStr, 30));
    }
    return entityList;
  }
```

##### 动态填充数据

```java
private List<Map<String, Object>> dynamicListDataByKey(List<PlatformIncomeRespDTO> statisData) {
    //参数类型
    final Set<String> statisParamKey = statisData.get(0).getParamInfo().keySet();
    final List<String> statisDate = statisData.get(0).getStatisDate();
    final int platformNum = statisData.size();

    //最终的数据
    List<Map<String, Object>> datas = new ArrayList<>();
    for (int i = 0; i < platformNum; i++) {
      for (int j = 0; j < statisDate.size(); j++) {
        Map<String, Object> hashMap = new LinkedHashMap<>(10);
        //这个是依据key进行数据的填充,(根据前面填写的statisKey1进行填充数据)
        hashMap.put("statisKey1", statisData.get(i).getPlatformNickName());
        String statisDateStr = statisDate.get(j);
         //这个是依据key进行数据的填充,(根据前面填写的statisKey2进行填充数据)
        hashMap.put("statisKey2", statisDateStr);
        //参数的验证
        for (String paramKey : statisParamKey) {
          for (BiPlatformStatisRespDTO paramData : statisData.get(i).getStatisData().get(j)) {
            if (paramKey.equals(paramData.getParamKey())) {
              hashMap.put(paramData.getParamKey(), paramData.getValue() + "(" + paramData.getRateValue() + ")");
            }
          }
        }
        datas.add(hashMap);
      }
    }
    return datas;
  }
```

##### excel的导出

```java
//statisData就是我们查询出来的数据
public void downloadPlatformIncomeContrast(List<PlatformIncomeRespDTO> statisData, HttpServletResponse response) {
    if (CollectionUtils.isEmpty(statisData)) {
      return;
    }
    //获取参数信息
    final Map<String, PlatformStatisParamRespData> paramInfo = statisData.get(0).getParamInfo();

    //拼装列头
    List<ExcelExportEntity> colList = this.dynamicNewAddExcel(paramInfo);

    //数据拼装
    List<Map<String, Object>> list = this.dynamicListDataByKey(statisData);
    final String xlsFileName = DateHelper.getNowString(FormatUnit.yyyyMMddHHmmss, true) + ".xls";
    final Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(), colList, list);

    //动态合并纵列[mergeMap key列索引(从0开始),value依赖的列,没有传空,startRow 开始行(从零开始)]
    //Map<Integer, int[]> mer = new HashMap<>();
    //mer.put(0, new int[]{});
    //PoiMergeCellUtil.mergeCells(workbook.getSheetAt(0), mer, 1);
    EasypoiUtil.downLoadExcel(xlsFileName, response, workbook);
  }
```

EasypoiUtil工具类

```java
public static void downLoadExcel(String fileName, HttpServletResponse response, Workbook workbook) {
    try {
      response.setCharacterEncoding("UTF-8");
      response.setHeader("content-Type", "application/vnd.ms-excel");
      response.setHeader("Content-Disposition",
          "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
      workbook.write(response.getOutputStream());
    } catch (IOException e) {
      throw new RuntimeException(e.getMessage());
    }
  }
```

PlatformIncomeRespDTO

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlatformIncomeRespDTO implements Serializable {

  private static final long serialVersionUID = 1100499105160261425L;


  /**
   * 平台别名
   */
  private String platformNickName;

  /*统计时间*/
  private List<String> statisDate;

  /*查询参数信息--[用户收入来源统计导出使用]*/
  private Map<String, PlatformStatisParamRespData> paramInfo;


  /*统计数据*/
  private List<List<BiPlatformStatisRespDTO>> statisData;
}
```

PlatformStatisParamRespData

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlatformStatisParamRespData implements Serializable {

  private static final long serialVersionUID = 4263523446154995471L;

  /**
   * 参数名称
   */
  private String dataName;

  /**
   * 参数key
   */
  private String dateKey;

  /**
   * 参数描述
   */
  private String dateDesc;

}
```

BiPlatformStatisRespDTO

```java
@Data
@AllArgsConstructor
public class BiPlatformStatisRespDTO implements Serializable {

  private static final long serialVersionUID = 6070471415344415351L;

  @Excel(name = "统计字段", orderNum = "1")
  private String param;

  /**
   * 参数的key
   */
  private String paramKey;

  /**
   * 参数描述
   */
  private String paramDesc;

  private String startDate;

  private String endDate;

  @Excel(name = "统计数据", orderNum = "2")
  private String value;

  private String rateValue;

  private Long id;

  private Integer riseOrFall;

  public BiPlatformStatisRespDTO(String startDate, String paramKey, String value) {
    this.paramKey = paramKey;
    this.startDate = startDate;
    this.value = value;
  }

  public BiPlatformStatisRespDTO() {
  }
}
```

### 测试用例

##### 测试特殊说明

导出的结果有个控制,是在拼装的时候没有填充此数据,不影响整体效果。

##### 测试结果示例

![图片](https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4cOoQzAXu4ZIlniaJ4ustt2RUfYS3yu0MCGtgeCBicX0StNMH5x36MXnDQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

##### 测试数据json示例

```json
[
    {
        "paramInfo": {
            "userCount": {
                "dataName": "用户数", 
                "dateDesc": "用户信息", 
                "dateKey": "userCount"
            }, 
            "friendsCount": {
                "dataName": "好友数", 
                "dateDesc": "好友信息", 
                "dateKey": "friendsCount"
            }
        }, 
        "platformNickName": "aaa", 
        "statisData": [
            [
                {
                    "paramKey": "userCount", 
                    "startDate": "2019-12-26", 
                    "value": "100"
                }, 
                {
                    "paramKey": "friendsCount", 
                    "startDate": "2019-12-26", 
                    "value": "200"
                }
            ], 
            [
                {
                    "paramKey": "userCount", 
                    "startDate": "2019-12-27", 
                    "value": "300"
                }, 
                {
                    "paramKey": "friendsCount", 
                    "startDate": "2019-12-27", 
                    "value": "400"
                }
            ]
        ], 
        "statisDate": [
            "2019-12-26", 
            "2019-12-27"
        ]
    }, 
    {
        "paramInfo": {
            "userCount": {
                "dataName": "用户数", 
                "dateDesc": "用户信息", 
                "dateKey": "userCount"
            }, 
            "friendsCount": {
                "dataName": "好友数", 
                "dateDesc": "好友信息", 
                "dateKey": "friendsCount"
            }
        }, 
        "platformNickName": "bbb", 
        "statisData": [
            [
                {
                    "paramKey": "userCount", 
                    "startDate": "2019-12-26", 
                    "value": "500"
                }, 
                {
                    "paramKey": "friendsCount", 
                    "startDate": "2019-12-26", 
                    "value": "600"
                }
            ], 
            [
                {
                    "paramKey": "userCount", 
                    "startDate": "2019-12-27", 
                    "value": "700"
                }, 
                {
                    "paramKey": "friendsCount", 
                    "startDate": "2019-12-27", 
                    "value": "800"
                }
            ]
        ], 
        "statisDate": [
            "2019-12-26", 
            "2019-12-27"
        ]
    }
]
```

##### 测试用例代码

```java
public class Simple {

  /**
   * @Description: 拼接表头
   * @Param: paramInfo :表头信息
   * @return: java.util.List<cn.afterturn.easypoi.excel.entity.params.ExcelExportEntity>
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 上午 10:42
   */
  private static List<ExcelExportEntity> dynamicNewAddExcel(Map<String, PlatformStatisParamRespData> paramInfo) {
    //表头的集合，用于添加表头
    List<ExcelExportEntity> entityList = new ArrayList<>();

    //ExcelExportEntity构造参数【第一个是列名头的统计字段,第二个是需要指定的一个key在填充数据的时候是需要根据这个key进行填充值,第三个参数是列宽】
    ExcelExportEntity platformXh = new ExcelExportEntity("统计字段1", "statisKey1", 30);
    //列的合并(纵向列的同名称会进行合并,效果见上图的平台名称的变化)
    platformXh.setMergeVertical(true);
    entityList.add(platformXh);

    ExcelExportEntity statisDateXh = new ExcelExportEntity("统计字段2", "statisKey2", 30);
    entityList.add(statisDateXh);

    //参数信息--[用于动态拼接列头]
    final Iterator<String> iterator = paramInfo.keySet().iterator();
    while (iterator.hasNext()) {
      final String paramKeyStr = iterator.next();
      final String paramNameStr = paramInfo.get(paramKeyStr).getDataName();
      //列头由参数汉字名称,参数key为列key
      entityList.add(new ExcelExportEntity(paramNameStr, paramKeyStr, 30));
    }
    return entityList;
  }


  /**
   * @Description: 拼接数据
   * @Param: statisData :拼接数据
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 上午 10:42
   */
  private static List<Map<String, Object>> dynamicListDataByKey(List<PlatformIncomeRespDTO> statisData) {
    //参数类型
    final Set<String> statisParamKey = statisData.get(0).getParamInfo().keySet();
    final List<String> statisDate = statisData.get(0).getStatisDate();
    final int platformNum = statisData.size();

    //最终的数据
    List<Map<String, Object>> datas = new ArrayList<>();
    for (int i = 0; i < platformNum; i++) {
      for (int j = 0; j < statisDate.size(); j++) {
        Map<String, Object> hashMap = new LinkedHashMap<>(10);
        //这个是依据key进行数据的填充,(根据前面填写的statisKey1进行填充数据)
        hashMap.put("statisKey1", statisData.get(i).getPlatformNickName());
        String statisDateStr = statisDate.get(j);
        //这个是依据key进行数据的填充,(根据前面填写的statisKey2进行填充  数据)
        hashMap.put("statisKey2", statisDateStr);
        //参数的验证
        for (String paramKey : statisParamKey) {
          for (BiPlatformStatisRespDTO paramData : statisData.get(i).getStatisData().get(j)) {
            if (paramKey.equals(paramData.getParamKey())) {
              hashMap.put(paramData.getParamKey(), paramData.getValue() + "(" + paramData.getRateValue() + ")");
            }
          }
        }
        datas.add(hashMap);
      }
    }
    return datas;
  }


  @Test
  public void Administrator_84_20191226095523() throws IOException {
    System.out.println("欢迎使用单元测试方法【Administrator_84()_20191226095523】");
    System.out.println("此方法测试描述：【】");
    //拼装第一个数据---------------------------------------------------------------------
    final PlatformIncomeRespDTO platformIncomeRespDTO1 = new PlatformIncomeRespDTO();
    platformIncomeRespDTO1.setPlatformNickName("aaa");
    //拼装时间维度
    platformIncomeRespDTO1.setStatisDate(Lists.newArrayList("2019-12-26","2019-12-27"));
    //拼装头信息
    Map<String, PlatformStatisParamRespData> paramInfo1=new HashMap<>();
    paramInfo1.put("userCount", new PlatformStatisParamRespData("用户数","userCount","用户信息"));
    paramInfo1.put("friendsCount", new PlatformStatisParamRespData("好友数","friendsCount","好友信息"));
    platformIncomeRespDTO1.setParamInfo(paramInfo1);
    //拼装数据
    final ArrayList<List<BiPlatformStatisRespDTO>> data1 = Lists.newArrayList();
    data1.add(Lists.newArrayList(new BiPlatformStatisRespDTO("2019-12-26","userCount","100"),new BiPlatformStatisRespDTO("2019-12-26","friendsCount","200")));
    data1.add(Lists.newArrayList(new BiPlatformStatisRespDTO("2019-12-27","userCount","300"),new BiPlatformStatisRespDTO("2019-12-27","friendsCount","400")));
    platformIncomeRespDTO1.setStatisData(data1);


    //拼装第二个数据---------------------------------------------------------------------
    final PlatformIncomeRespDTO platformIncomeRespDTO2 = new PlatformIncomeRespDTO();
    platformIncomeRespDTO2.setPlatformNickName("bbb");
    //拼装时间维度
    platformIncomeRespDTO2.setStatisDate(Lists.newArrayList("2019-12-26","2019-12-27"));
    //拼装头信息
    Map<String, PlatformStatisParamRespData> paramInfo2=new HashMap<>();
    paramInfo2.put("userCount", new PlatformStatisParamRespData("用户数","userCount","用户信息"));
    paramInfo2.put("friendsCount", new PlatformStatisParamRespData("好友数","friendsCount","好友信息"));
    platformIncomeRespDTO2.setParamInfo(paramInfo2);

    //拼装数据
    final ArrayList<List<BiPlatformStatisRespDTO>> data2 = Lists.newArrayList();
    data2.add(Lists.newArrayList(new BiPlatformStatisRespDTO("2019-12-26","userCount","500"),new BiPlatformStatisRespDTO("2019-12-26","friendsCount","600")));
    data2.add(Lists.newArrayList(new BiPlatformStatisRespDTO("2019-12-27","userCount","700"),new BiPlatformStatisRespDTO("2019-12-27","friendsCount","800")));
    platformIncomeRespDTO2.setStatisData(data2);

    final ArrayList<PlatformIncomeRespDTO> platformIncomeRespDTOS = Lists.newArrayList(platformIncomeRespDTO1, platformIncomeRespDTO2);
    System.out.println(JSONObject.toJSONString(platformIncomeRespDTOS));

    //拼装列头
    List<ExcelExportEntity> colList = dynamicNewAddExcel(paramInfo2);

    //数据拼装
    List<Map<String, Object>> list = dynamicListDataByKey(platformIncomeRespDTOS);

    //文件名称
    final Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(), colList, list);

    //此功能与【拼装列头】中的 platformXh.setMergeVertical(true);功能效果一样,可直接使用 platformXh.setMergeVertical(true);进行纵向合并
    //动态合并纵列[mergeMap key列索引(从0开始),value依赖的列,没有传空,startRow 开始行(从零开始)]
    //Map<Integer, int[]> mer = new HashMap<>();
    //mer.put(0, new int[]{});
    //PoiMergeCellUtil.mergeCells(workbook.getSheetAt(0), mer, 1);

    final FileOutputStream fileOutputStream = new FileOutputStream("C:\\Users\\Administrator\\Desktop\\1.xls");
    //导出excel
    downLoadExcel(null, fileOutputStream, workbook);
  }




  /**
   * @Description: 下载文件
   * @Param: fileName
   * @Param outputStream
   * @Param workbook
   * @return: void
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 上午 10:44
   */
  public static void downLoadExcel(String fileName, FileOutputStream outputStream, Workbook workbook)
      throws IOException {
    try {
      workbook.write(outputStream);
    } catch (IOException e) {
      throw new RuntimeException(e.getMessage());
    } finally {
      outputStream.close();
    }
  }
}
```