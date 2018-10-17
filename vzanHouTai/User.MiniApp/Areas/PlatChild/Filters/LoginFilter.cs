﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL.MiniApp.Ent;
using Entity.MiniApp.Ent;
using BLL.MiniApp;
using BLL.MiniApp.Plat;
using Core.MiniApp;
using Entity.MiniApp;
using Entity.MiniApp.Plat;
using Entity.MiniApp.User;
using Newtonsoft.Json;
using Utility;
using Entity.MiniApp.Footbath;
using BLL.MiniApp.Footbath;
using Entity.MiniApp.Fds;
using BLL.MiniApp.Fds;
using BLL.MiniApp.Dish;
using Utility.IO;
using Entity.MiniApp.Conf;
using BLL.MiniApp.Conf;

namespace User.MiniApp.Areas.PlatChild.Filters
{
    public class LoginFilterAttribute : AuthorizeAttribute
    {
        
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext.ActionDescriptor.IsDefined(typeof(AllowAnonymousAttribute), true))
                return;
            int aid = Context.GetRequestInt("appId", 0);
            int fromPlat = Context.GetRequestInt("fromPlat", 0);
            if (aid<=0)
            {
                aid = Context.GetRequestInt("aid", 0);
                if(aid<=0)
                {
                    filterContext.Result = new RedirectResult("/base/PageError?type=5");
                    return;
                }
            }

            string AccountId = Core.MiniApp.Utils.GetBuildCookieId("dz_UserCookieNew").ToString();
            Guid _accountid = Guid.Empty;
            Guid.TryParse(AccountId, out _accountid);
            if (aid == 0 || _accountid == Guid.Empty)
            {
                filterContext.Result = new RedirectResult("/base/PageError?type=1");
                return;
            }
            
            XcxAppAccountRelation xcxrelation = XcxAppAccountRelationBLL.SingleModel.GetModelByaccountidAndAppid(aid, _accountid.ToString());
            if (xcxrelation == null)
            {
                filterContext.Result = new RedirectResult("/base/PageError?type=2");
                return;
            }
            if (fromPlat == 0)//表示直接从平台店铺列表添加店铺 没有主人的店铺
            {
                PlatStore store = PlatStoreBLL.SingleModel.GetModelByAId(aid);
                if (store == null)
                {
                    filterContext.Result = new RedirectResult("/base/PageError?type=2");
                    return;
                }
            }
        }
    }
}