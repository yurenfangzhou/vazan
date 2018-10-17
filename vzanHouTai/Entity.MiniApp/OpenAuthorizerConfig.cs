﻿using Entity.Base;
using System;
using Utility;

namespace Entity.MiniApp
{
    [Serializable]
    [SqlTable(dbEnum.VZAN)]
    public class OpenAuthorizerConfig
    {
        public OpenAuthorizerConfig()
        { }
        #region Model
        private int _id;
        private int _state;
        private string _minisnsid;
        private string _user_name;
        private string _nick_name;
        private string _head_img;
        private string _alias;
        private string _qrcode_url;
        private int _service_type_info;
        private int _verify_type_info;
        private string _appid;
        private string _func_info;
        /// <summary>
        /// auto_increment
        /// </summary>
        [SqlField(IsAutoId = true, IsPrimaryKey = true)]
        public int id
        {
            set { _id = value; }
            get { return _id; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public int state
        {
            set { _state = value; }
            get { return _state; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string user_name
        {
            set { _user_name = value; }
            get { return _user_name; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string nick_name
        {
            set { _nick_name = value; }
            get { return _nick_name; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string head_img
        {
            set { _head_img = value; }
            get { return _head_img; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string alias
        {
            set { _alias = value; }
            get { return _alias; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string qrcode_url
        {
            set { _qrcode_url = value; }
            get { return _qrcode_url; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public int service_type_info
        {
            set { _service_type_info = value; }
            get { return _service_type_info; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public int verify_type_info
        {
            set { _verify_type_info = value; }
            get { return _verify_type_info; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string appid
        {
            set { _appid = value; }
            get { return _appid; }
        }
        /// <summary>
        /// 
        /// </summary>
        [SqlField]
        public string func_info
        {
            set { _func_info = value; }
            get { return _func_info; }
        }
        /// <summary>
        /// 关联用户Id
        /// </summary>
        [SqlField]
        public string minisnsid
        {
            set { _minisnsid = value; }
            get { return _minisnsid; }
        }
        
        [SqlField]
        public int type
        {
            get; set;
        }

        [SqlField]
        public int RId
        {
            get; set;
        }
        /// <summary>
        /// 论坛直播必要参数，其他不用填，论坛的为1，直播的为2，有约3，小程序组公众号4
        /// </summary>
        [SqlField]
        public int newtype
        {
            get; set;
        }
        #endregion Model
    }
}
