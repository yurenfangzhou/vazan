﻿using Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utility;

namespace Entity.OpenWx
{
    [Serializable]
    [SqlTable(dbEnum.MINIAPP)]
    public class UserXcxTemplate
    {
        ///<summary>
        /// auto_increment
        /// </summary>		
        [SqlField(IsAutoId = true, IsPrimaryKey = true)]
        public int Id { get; set; }
        ///<summary>
        /// 第三方平台上小程序模板Id
        /// </summary>		
        [SqlField]
        public int TId { get; set; }
        ///<summary>
        /// 用户id
        /// </summary>		
        [SqlField]
        public string TuserId { get; set; }
        ///<summary>
        /// 同城code
        /// </summary>		
        [SqlField]
        public int AreaCode { get; set; }
        ///<summary>
        /// 小程序Appid
        /// </summary>		
        [SqlField]
        public string AppId { get; set; }
        ///<summary>
        /// 小程序秘钥
        /// </summary>		
        [SqlField]
        public string Appsr { get; set; }
        ///<summary>
        /// 状态
        /// </summary>		
        [SqlField]
        public int State { get; set; }
        ///<summary>
        /// 修改时间
        /// </summary>		
        [SqlField]
        public DateTime UpdateTime { get; set; }

        ///<summary>
        /// 版本号
        /// </summary>		
        [SqlField]
        public string Version { get; set; }
        ///<summary>
        /// 标签
        /// </summary>		
        [SqlField]
        public string Tag { get; set; }
        ///<summary>
        /// 小程序审核Id
        /// </summary>		
        [SqlField]
        public long Auditid { get; set; }

        ///<summary>
        /// 小程序审核结果
        /// </summary>		
        [SqlField]
        public string Reason { get; set; }
        ///<summary>
        /// 
        /// </summary>		
        [SqlField]
        public string access_token { get; set; }
        ///<summary>
        /// 过期时间
        /// </summary>		
        [SqlField]
        public DateTime token_time { get; set; }
        ///<summary>
        /// 有效时间
        /// </summary>		
        [SqlField]
        public int expires_in { get; set; }
        /// <summary>
        /// 小程序二维码
        /// </summary>
        [SqlField]
        public string QrCodeUrl { get; set; }
        /// <summary>
        /// 购买的小程序版本
        /// </summary>
        [SqlField]
        public int BuyVersion { get; set; }
        /// <summary>
        /// 购买的小程序过期时间
        /// </summary>
        [SqlField]
        public DateTime EndDate { get; set; }
        [SqlField]
        public int CityInfoId { get; set; }
        [SqlField]
        public int EntrancePage { get; set; } = 0;
        [SqlField]
        public DateTime AddTime { get; set; }
        /// <summary>
        ///上一个提交的审核ID
        /// </summary>
        [SqlField]
        public long PreAuditId { get; set; }

    }
}
