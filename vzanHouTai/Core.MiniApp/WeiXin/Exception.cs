﻿using System;
using System.Collections.Generic;
using System.Web;

namespace Core.MiniApp
{
    public class WxPayException : Exception 
    {
        public WxPayException(string msg) : base(msg) 
        {

        }
     }
}