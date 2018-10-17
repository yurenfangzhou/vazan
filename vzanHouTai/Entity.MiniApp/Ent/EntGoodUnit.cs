﻿using Entity.Base;
using System;
using Utility;

namespace Entity.MiniApp.Ent
{
   /// <summary>
   /// 产品数量单位
   /// </summary>
    [Serializable]
    [SqlTable(dbEnum.MINIAPP)]
    public class EntGoodUnit
    {
        /// <summary>
        /// 产品标签
        /// </summary>
        [SqlField(IsPrimaryKey = true, IsAutoId = true)]
        public int id { get; set; }
        /// <summary>
        /// 用户小程序ID
        /// </summary>
        [SqlField]
        public int aid { get; set; } = 0;
        /// <summary>
        /// 单位名称
        /// </summary>
        [SqlField]
        public string name { get; set; } = string.Empty;
        /// <summary>
        /// 排序
        /// </summary>
        [SqlField]
        public int sort { get; set; } = 99;
        [SqlField]
        public int state { get; set; } = 1;
    }
}
