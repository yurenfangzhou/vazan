﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace User.MiniApp.Comment
{
    public static class ExceptionExtensions
    {
        #region 异常处理

        public static void ThrowIfNull<T>(this T argument, string paramName) where T : class
        {
            if (argument == null)
            {
                throw new ArgumentNullException(paramName);
            }
        }

        public static void ThrowIf<T>(this T argument, Func<T, bool> predicate, string msg)
        {
            if (predicate(argument))
            {
                throw new ArgumentException(msg);
            }
        }

        #endregion
    }
}