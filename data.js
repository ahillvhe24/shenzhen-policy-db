// 深圳2026年租房与人才优惠政策数据库
// 数据来源：深圳市政府在线、深圳市人力资源和社会保障局等官方渠道

const policyDB = {
  // ========== 市级人才补贴 ==========
  city_talent_subsidies: [
    {
      id: "ct01",
      title: "新引进人才租房生活补贴（本科）",
      category: "rental_subsidy",
      level: "city",
      education: "本科",
      amount: 15000,
      unit: "元（一次性）",
      description: "对新引进的全日制本科学历人才，给予1.5万元一次性租房生活补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历，并获得学士学位",
        "未满30周岁（含30周岁）",
        "在深圳缴纳社保（累计满1年）",
        "在深圳无自有住房"
      ],
      districts: ["全市各区"],
      application_method: "线上申报：深圳市人力资源和社会保障局官网在线提交",
      contact: "0755-12333",
      effective_date: "2025-01-01",
      expiry_date: "2026-12-31",
      updated: "2026-01-15",
      tags: ["租房", "本科", "一次性补贴", "市级"],
      priority: 1,
      is_active: true
    },
    {
      id: "ct02",
      title: "新引进人才租房生活补贴（硕士）",
      category: "rental_subsidy",
      level: "city",
      education: "硕士",
      amount: 25000,
      unit: "元（一次性）",
      description: "对新引进的全日制硕士学历人才，给予2.5万元一次性租房生活补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制硕士及以上学历",
        "未满35周岁（含35周岁）",
        "在深圳缴纳社保（累计满1年）",
        "在深圳无自有住房"
      ],
      districts: ["全市各区"],
      application_method: "线上申报：深圳市人力资源和社会保障局官网在线提交",
      contact: "0755-12333",
      effective_date: "2025-01-01",
      expiry_date: "2026-12-31",
      updated: "2026-01-15",
      tags: ["租房", "硕士", "一次性补贴", "市级"],
      priority: 1,
      is_active: true
    },
    {
      id: "ct03",
      title: "新引进人才租房生活补贴（博士）",
      category: "rental_subsidy",
      level: "city",
      education: "博士",
      amount: 30000,
      unit: "元（一次性）",
      description: "对新引进的全日制博士学历人才，给予3万元一次性租房生活补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制博士学历",
        "未满40周岁（含40周岁）",
        "在深圳缴纳社保（累计满1年）",
        "在深圳无自有住房"
      ],
      districts: ["全市各区"],
      application_method: "线上申报：深圳市人力资源和社会保障局官网在线提交",
      contact: "0755-12333",
      effective_date: "2025-01-01",
      expiry_date: "2026-12-31",
      updated: "2026-01-15",
      tags: ["租房", "博士", "一次性补贴", "市级"],
      priority: 1,
      is_active: true
    },
    {
      id: "ct04",
      title: "海外高层次人才奖励补贴",
      category: "high_level_talent",
      level: "city",
      education: "博士及以上或海外背景",
      amount: 500000,
      unit: "元（最高，分3年发放）",
      description: "对入选深圳市海外高层次人才奖励计划的人才，给予最高50万元奖励补贴，分3年发放。",
      conditions: [
        "在海外知名高校获得博士学位或具有海外工作经历",
        "在国际知名企业或机构担任高级管理/技术职务",
        "与深圳用人单位签订3年以上劳动合同",
        "在深圳缴纳社保",
        "通过深圳市海外高层次人才认定"
      ],
      districts: ["全市各区"],
      application_method: "通过所在单位向区人才工作部门提出申请，逐级推荐",
      contact: "0755-83918000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["高层次人才", "海外人才", "最高50万", "市级"],
      priority: 2,
      is_active: true
    }
  ],

  // ========== 区级人才补贴 ==========
  district_talent_subsidies: [
    {
      id: "dt01",
      title: "南山区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "南山区",
      education: "本科及以上",
      amount: 10000,
      unit: "元（一次性，叠加市级）",
      description: "南山区对新引进的全日制本科及以上学历人才，在享受市级补贴基础上，额外给予1万元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户南山区并居住在南山区",
        "在南山区用人单位工作",
        "已享受或同时享受市级人才补贴"
      ],
      districts: ["南山区"],
      application_method: "线上：南山区政府在线网站；线下：南山区行政服务中心",
      contact: "0755-26518200",
      effective_date: "2025-06-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["叠加补贴", "南山区", "本科及以上"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt02",
      title: "福田区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "福田区",
      education: "本科及以上",
      amount: 8000,
      unit: "元（一次性，叠加市级）",
      description: "福田区对新引进的全日制本科及以上学历人才，在享受市级补贴基础上，额外给予8000元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历，并获得学士学位",
        "落户福田区满1年",
        "在福田区用人单位工作",
        "在深圳无自有住房"
      ],
      districts: ["福田区"],
      application_method: "线上：福田区政府在线网站人才服务板块",
      contact: "0755-88823500",
      effective_date: "2025-04-01",
      expiry_date: null,
      updated: "2026-02-15",
      tags: ["叠加补贴", "福田区", "本科及以上"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt03",
      title: "龙华区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "龙华区",
      education: "大专及以上",
      amount: 6000,
      unit: "元（一次性，叠加市级）",
      description: "龙华区对新引进的全日制大专及以上学历人才，在享受市级补贴基础上，额外给予6000元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制大专及以上学历",
        "落户龙华区并居住在龙华区",
        "在龙华区用人单位工作",
        "在深圳无自有住房"
      ],
      districts: ["龙华区"],
      application_method: "线上：龙华区政府在线网站；线下：龙华区行政服务大厅",
      contact: "0755-23331666",
      effective_date: "2025-03-01",
      expiry_date: null,
      updated: "2026-01-20",
      tags: ["叠加补贴", "龙华区", "大专及以上", "门槛较低"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt04",
      title: "宝安区紧缺人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "宝安区",
      education: "本科及以上",
      amount: 12000,
      unit: "元（一次性，叠加市级）",
      description: "宝安区对列入紧缺人才目录的专业人才，在享受市级补贴基础上，额外给予1.2万元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "属于宝安区紧缺人才目录范围内",
        "在宝安区用人单位工作并签订3年以上合同",
        "在深圳无自有住房"
      ],
      districts: ["宝安区"],
      application_method: "通过用人单位统一申报",
      contact: "0755-29985500",
      effective_date: "2025-07-01",
      expiry_date: null,
      updated: "2026-03-10",
      tags: ["叠加补贴", "宝安区", "紧缺人才"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt05",
      title: "龙岗区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "龙岗区",
      education: "大专及以上",
      amount: 6000,
      unit: "元（一次性，叠加市级）",
      description: "龙岗区对新引进的全日制大专及以上学历人才，额外给予6000元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制大专及以上学历",
        "落户龙岗区并居住在龙岗区",
        "在龙岗区用人单位工作",
        "在深圳无自有住房"
      ],
      districts: ["龙岗区"],
      application_method: "线上：龙岗区政府在线网站",
      contact: "0755-89962000",
      effective_date: "2025-05-01",
      expiry_date: null,
      updated: "2026-02-20",
      tags: ["叠加补贴", "龙岗区", "大专及以上"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt06",
      title: "罗湖区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "罗湖区",
      education: "本科及以上",
      amount: 8000,
      unit: "元（一次性，叠加市级）",
      description: "罗湖区对新引进的全日制本科及以上学历人才，额外给予8000元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户罗湖区并居住在罗湖区",
        "在罗湖区用人单位工作",
        "在深圳无自有住房"
      ],
      districts: ["罗湖区"],
      application_method: "线上：罗湖区政府在线网站",
      contact: "0755-82018600",
      effective_date: "2025-04-01",
      expiry_date: null,
      updated: "2026-01-10",
      tags: ["叠加补贴", "罗湖区", "本科及以上"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt07",
      title: "盐田区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "盐田区",
      education: "本科及以上",
      amount: 6000,
      unit: "元（一次性，叠加市级）",
      description: "盐田区对新引进的全日制本科及以上学历人才，额外给予6000元租房补贴。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户盐田区并居住在盐田区",
        "在盐田区用人单位工作",
        "在深圳无自有住房"
      ],
      districts: ["盐田区"],
      application_method: "线上：盐田区政府在线网站",
      contact: "0755-25282500",
      effective_date: "2025-06-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["叠加补贴", "盐田区", "本科及以上"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt08",
      title: "坪山区新引进人才租房补贴",
      category: "rental_subsidy",
      last_update: "2026-03",
      level: "district",
      district: "坪山区",
      education: "本科及以上",
      amount: 10000,
      unit: "元（一次性，叠加市级）",
      description: "坪山区对新引进的全日制本科及以上学历人才，额外给予1万元租房补贴，重点支持制造业和新能源产业人才。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户坪山区并居住在坪山区",
        "在坪山区用人单位工作",
        "优先支持先进制造、新能源等支柱产业人才"
      ],
      districts: ["坪山区"],
      application_method: "通过用人单位向坪山区人才工作局申报",
      contact: "0755-84350600",
      effective_date: "2025-08-01",
      expiry_date: null,
      updated: "2026-03-15",
      tags: ["叠加补贴", "坪山区", "产业人才"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt09",
      title: "光明区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "光明区",
      education: "本科及以上",
      amount: 8000,
      unit: "元（一次性，叠加市级）",
      description: "光明区对新引进的全日制本科及以上学历人才，额外给予8000元租房补贴，重点支持科技创新人才。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户光明区并居住在光明区",
        "在光明区用人单位工作",
        "优先支持科技创新领域人才"
      ],
      districts: ["光明区"],
      application_method: "线上：光明区政府在线网站",
      contact: "0755-23460000",
      effective_date: "2025-05-01",
      expiry_date: null,
      updated: "2026-02-28",
      tags: ["叠加补贴", "光明区", "科创人才"],
      priority: 3,
      is_active: true
    },
    {
      id: "dt10",
      title: "大鹏新区新引进人才租房补贴",
      category: "rental_subsidy",
      level: "district",
      district: "大鹏新区",
      education: "本科及以上",
      amount: 6000,
      unit: "元（一次性，叠加市级）",
      description: "大鹏新区对新引进的全日制本科及以上学历人才，额外给予6000元租房补贴，重点支持旅游、生物医学产业人才。",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历",
        "落户大鹏新区并居住在大鹏新区",
        "在大鹏新区用人单位工作",
        "优先支持文旅、生物医学产业人才"
      ],
      districts: ["大鹏新区"],
      application_method: "通过大鹏新区公共人力资源服务中心申报",
      contact: "0755-28315000",
      effective_date: "2025-09-01",
      expiry_date: null,
      updated: "2026-01-25",
      tags: ["叠加补贴", "大鹏新区", "产业人才"],
      priority: 3,
      is_active: true
    }
  ],

  // ========== 保障性住房 ==========
  affordable_housing: [
    {
      id: "ah01",
      title: "公共租赁住房（公租房）",
      category: "public_rental",
      type: "rental",
      description: "面向符合条件的低收入及中等偏下收入家庭、新就业职工和稳定就业外来务工人员的保障性租赁住房。租金为市场价的30%-50%。",
      rent_range: "15-40元/平方米/月（视地段而定）",
      conditions: [
        "申请人具有深圳户籍（家庭成员至少1人为深户）",
        "申请人名下无自有住房或人均住房建筑面积低于12平方米",
        "申请人参加深圳社保满1年",
        "收入符合标准：单身人均月收入低于8000元，家庭人均月收入低于6000元",
        "在深圳未享受过人才购房补贴政策"
      ],
      application_method: "线上：深圳市住建局官网住房保障服务专区；线下：各区行政服务大厅",
      process: ["在线提交申请", "资格初审(15个工作日)", "复审及公示", "轮候排序", "配租"],
      waiting_time: "3-6个月",
      districts: ["全市各区均有项目"],
      contact: "0755-83918000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["公租房", "低收入", "租金优惠", "长期保障"],
      priority: 1,
      is_active: true
    },
    {
      id: "ah02",
      title: "保障性租赁住房（保租房）",
      category: "affordable_rental",
      type: "rental",
      description: "面向新市民、青年人等群体的保障性租赁住房，租金不高于同地段市场租金的90%。2026年深圳计划新增供应5万套。",
      rent_range: "市场价的60%-90%（约30-80元/平方米/月）",
      conditions: [
        "申请人无深圳户籍限制（新市民、青年人均可申请）",
        "申请人及家庭成员在深圳无自有住房",
        "申请人在深圳缴纳社保",
        "申请人未享受其他住房保障政策"
      ],
      application_method: "线上：深圳市住建局官网；线下：各项目现场申请点",
      process: ["项目发布", "在线申请", "资格审核", "摇号配租", "签约入住"],
      waiting_time: "1-3个月",
      districts: ["南山区、福田区、宝安区、龙岗区等"],
      contact: "0755-83918000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["保租房", "新市民", "青年人", "无户籍限制"],
      priority: 1,
      is_active: true
    },
    {
      id: "ah03",
      title: "人才房优先配售",
      category: "talent_housing",
      type: "purchase",
      description: "人才房不再以销售为主，2025年起转为配租型。新引进人才可通过轮候库优先配售人才房，价格约为同地段商品房的50%-60%。",
      rent_range: "售价约为同地段商品房的50%-60%（约3-5万元/平方米）",
      conditions: [
        "具有深圳户籍",
        "全日制本科及以上学历（部分项目大专及以上也可）",
        "在深圳缴纳社保满3年",
        "申请人及家庭成员在深圳无自有住房或人均住房面积低于15平方米",
        "未享受过其他人才购房补贴政策"
      ],
      application_method: "线上：深圳市住建局官网住房保障服务专区",
      process: ["人才认定", "进入人才住房轮候库", "等待配租通知", "选房", "签约"],
      waiting_time: "6-12个月",
      districts: ["宝安区、龙华区、龙岗区、光明区"],
      contact: "0755-83918000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["人才房", "优先配售", "价格优惠", "需要轮候"],
      priority: 1,
      is_active: true
    }
  ],

  // ========== 落户政策 ==========
  hukou_policy: [
    {
      id: "hk01",
      title: "学历入户（全日制大专）",
      category: "education_hukou",
      level: "city",
      education: "大专",
      description: "全日制大专及以上学历，年龄在35周岁以下，可直接申请深圳户籍入户。",
      age_limit: "大专35周岁以下",
      requirements: [
        "全日制专科学历",
        "年龄35周岁以下",
        "在深圳缴纳社保（在缴状态）",
        "无刑事犯罪记录"
      ],
      process: ["线上申请：深圳公安官网/粤省事APP", "提交材料", "审核(5-10个工作日)", "领取户口迁移证", "落户办理"],
      time: "15-30个工作日",
      cost: "免费",
      contact: "0755-84462000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["学历入户", "大专", "快速通道"],
      priority: 1,
      is_active: true
    },
    {
      id: "hk02",
      title: "学历入户（全日制本科）",
      category: "education_hukou",
      level: "city",
      education: "本科",
      description: "全日制本科及以上学历，年龄在45周岁以下，可直接申请深圳户籍入户。",
      age_limit: "本科45周岁以下",
      requirements: [
        "全日制本科及以上学历",
        "年龄45周岁以下",
        "在深圳缴纳社保（在缴状态）",
        "无刑事犯罪记录"
      ],
      process: ["线上申请：深圳公安官网/粤省事APP", "提交材料", "审核(5-10个工作日)", "领取户口迁移证", "落户办理"],
      time: "15-30个工作日",
      cost: "免费",
      contact: "0755-84462000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["学历入户", "本科", "快速通道"],
      priority: 1,
      is_active: true
    },
    {
      id: "hk03",
      title: "积分入户",
      category: "points_hukou",
      level: "city",
      description: "非全日制学历人才可通过积分系统申请深圳户籍。按学历、社保年限、年龄、居住等多维度评分，每年名额有限。",
      points_system: {
        "全日制硕士": 90,
        "全日制博士": 100,
        "非全日制硕士": 80,
        "非全日制博士": 90,
        "全日制本科": 80,
        "非全日制本科": 60,
        "全日制大专": 60,
        "非全日制大专": 40,
        "社保(每满1年)": 4,
        "住房(自有)": 10,
        "年龄(25-35)": 10,
        "居住(每满1年)": 2
      },
      quota_per_year: "约3000-5000个名额",
      requirements: [
        "具有深圳户籍配偶或深圳房产",
        "在深圳缴纳社保",
        "无刑事犯罪记录",
        "积分达到当年分数线"
      ],
      process: ["年度开放申报(通常每年一次)", "在线填报积分信息", "系统自动评分", "排名录取", "办理落户"],
      time: "每年开放1-2个月",
      cost: "免费",
      contact: "0755-84462000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["积分入户", "非全日制", "竞争激烈"],
      priority: 2,
      is_active: true
    },
    {
      id: "hk04",
      title: "投靠入户",
      category: "family_hukou",
      level: "city",
      description: "深圳户籍人员的配偶、子女、父母可通过投靠方式落户深圳。",
      requirements: [
        "配偶为深圳户籍且结婚满3年",
        "子女未满18周岁",
        "父母一方为深圳户籍且年满60周岁"
      ],
      process: ["线上/线下申请", "提交材料", "审核(20个工作日)", "办理落户"],
      time: "20-30个工作日",
      cost: "免费",
      contact: "0755-84462000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-01-01",
      tags: ["投靠入户", "家庭", "配偶子女父母"],
      priority: 2,
      is_active: true
    }
  ],

  // ========== 其他福利 ==========
  other_benefits: [
    {
      id: "ob01",
      title: "人才公寓",
      category: "talent_apartment",
      description: "深圳市及各区建设的人才公寓，面向符合条件的企业人才提供租金优惠的公寓住房。部分项目租金低至市场价5折。",
      rent_range: "市场价的50%-80%",
      conditions: [
        "用人单位统一申请",
        "申请人为企业核心人才/骨干人才",
        "在深圳无自有住房",
        "符合企业认定标准"
      ],
      districts: ["南山区（前海）、福田区（中心区）、宝安区、龙华区"],
      application_method: "通过用人单位向所在区人才办申请",
      contact: "各区人才办",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-03-01",
      tags: ["人才公寓", "租金优惠", "企业申请"],
      priority: 2,
      is_active: true
    },
    {
      id: "ob02",
      title: "住房公积金提取/贷款优惠",
      category: "housing_fund",
      description: "深圳户籍人才可申请住房公积金提取用于支付房租。租房提取上限提高至每月3000元。同时人才可享受公积金贷款利率优惠。",
      rent_withdrawal_limit: "3000元/月",
      loan_benefit: "首套房公积金贷款利率可享受0.5%优惠",
      conditions: [
        "具有深圳户籍或持有《深圳市人才认定书》",
        "在深圳正常缴存住房公积金",
        "在深圳无自有住房或租房居住"
      ],
      application_method: "线上：粤省事APP/深圳公积金微信公众号",
      contact: "0755-12329",
      effective_date: "2025-06-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["公积金", "租房提取", "贷款利率优惠"],
      priority: 3,
      is_active: true
    },
    {
      id: "ob03",
      title: "契税减免政策",
      category: "tax_reduction",
      description: "人才购买首套住房可享受契税减免优惠。高层次人才购买人才房契税全免，普通人才可享受契税50%补贴。",
      benefit: "高层次人才：契税全免；普通人才：契税50%补贴",
      conditions: [
        "具有深圳户籍或《深圳市人才认定书》",
        "购买首套住房",
        "在2026年1月1日之后签订购房合同"
      ],
      application_method: "购房时向税务部门提交人才认定材料",
      contact: "0755-83105555",
      effective_date: "2026-01-01",
      expiry_date: "2026-12-31",
      updated: "2026-01-01",
      tags: ["契税", "购房优惠", "税率减免"],
      priority: 3,
      is_active: true
    },
    {
      id: "ob04",
      title: "子女教育保障",
      category: "education",
      description: "高层次人才子女可享受入学优先安排。A类人才子女可在全市范围内优先选择义务教育阶段学校就读。",
      benefit_level: {
        "A类人才": "全市优先选校",
        "B类人才": "所在区优先安排",
        "C类人才": "所在区统筹安排"
      },
      conditions: [
        "持有《深圳市高层次人才证书》",
        "子女处于义务教育阶段（小学/初中）"
      ],
      application_method: "通过用人单位向区教育部门申请",
      contact: "0755-82018200",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-02-01",
      tags: ["子女教育", "入学优先", "高层次人才"],
      priority: 3,
      is_active: true
    },
    {
      id: "ob05",
      title: "医疗保障优待",
      category: "medical",
      description: "高层次人才享受健康体检、就医绿色通道等医疗保障。A/B类人才纳入市健康管理对象，享受免费年度体检。",
      benefit_level: {
        "A类人才": "免费年度体检+就医绿色通道+保健服务",
        "B类人才": "免费年度体检+就医绿色通道",
        "C类人才": "免费年度体检"
      },
      conditions: [
        "持有《深圳市高层次人才证书》",
        "在深圳缴纳社保"
      ],
      application_method: "通过用人单位向卫健部门申请",
      contact: "0755-88115000",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-01-01",
      tags: ["医疗", "体检", "绿色通道", "高层次人才"],
      priority: 3,
      is_active: true
    },
    {
      id: "ob06",
      title: "创业扶持资金",
      category: "entrepreneurship",
      description: "深圳户籍人才在深圳创业可申请创业扶持资金。一次性创业资助最高10万元，后续还有场地补贴和社保补贴。",
      amount: "一次性创业资助：1万元-10万元",
      additional_benefits: ["场地补贴：最高12万/3年", "社保补贴：单位缴费部分全额补贴", "贷款贴息：最高500万元创业担保贷款"],
      conditions: [
        "具有深圳户籍",
        "在深圳首次创办企业或从事个体经营",
        "正常经营满6个月",
        "本人及法人股东无不良信用记录"
      ],
      application_method: "线上：广东政务服务网深圳站点",
      contact: "0755-12333",
      effective_date: "2025-01-01",
      expiry_date: null,
      updated: "2026-01-01",
      tags: ["创业", "扶持资金", "场地补贴", "贷款贴息"],
      priority: 3,
      is_active: true
    }
  ],

  // ========== 人才分类 ==========
  talent_categories: [
    {
      id: "tc01",
      name: "A类人才（卓越人才）",
      description: "获得国家最高科学技术奖、诺贝尔奖等世界级奖项，或经认定具有卓越才能的顶尖人才。",
      benefits_summary: "最高500万安家补贴 + 免费人才房 + 配偶就业 + 子女优先入学 + 医疗保障 + 税收减免",
      subsidy: "500万（最高）",
      housing: "免费人才房（150-200平方米）",
      tags: ["顶尖", "世界级", "最高补贴"],
      is_active: true
    },
    {
      id: "tc02",
      name: "B类人才（领军人才）",
      description: "国家级人才工程入选者、省级领军人才、大型企业高管和技术带头人等。",
      benefits_summary: "最高200万安家补贴 + 人才房优先配售 + 配偶就业 + 子女入学 + 医疗保障",
      subsidy: "200万（最高）",
      housing: "人才房优先配售",
      tags: ["国家级", "领军", "高补贴"],
      is_active: true
    },
    {
      id: "tc03",
      name: "C类人才（骨干人才）",
      description: "市级人才工程入选者、企业核心骨干、高级职称专业人员等。",
      benefits_summary: "最高50万安家补贴 + 人才房申购资格 + 租房补贴 + 子女入学优先",
      subsidy: "50万（最高）",
      housing: "人才房申购资格",
      tags: ["市级", "骨干", "中等补贴"],
      is_active: true
    }
  ],

  // ========== 政策趋势 ==========
  policy_trends: {
    summary: "2026年深圳人才政策延续\"租购并举\"基调，重点方向如下：",
    trends: [
      "全面停止新批可售型人才房，转为以配租型公共住房为主",
      "加大新引进人才租房补贴发放力度，各区叠加补贴持续增加",
      "重点支持\"高精尖缺\"人才，实施更精准的安居保障政策",
      "多区放宽人才房申请门槛（大专及以上即可）",
      "保租房新增供应目标5万套/年",
      "人才认定逐步从\"学历导向\"向\"贡献导向\"转变",
      "住房公积金租房提取上限提高至每月3000元",
      "各区差异化竞争人才：南山区/福田区侧重科技金融，龙华/龙岗侧重先进制造"
    ]
  }
};
