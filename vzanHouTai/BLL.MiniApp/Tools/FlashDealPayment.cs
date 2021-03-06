﻿using DAL.Base;
using Entity.MiniApp;
using Entity.MiniApp.Tools;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.MiniApp.Tools
{
    public class FlashDealPaymentBLL : BaseMySql<FlashDealPayment>
    {
        public bool PayByCredit(FlashDealItem item, int userId)
        {
            string AddSql = AddUserPayment(item: item, userId: userId, payWay: miniAppBuyMode.储值支付, payPrice: item.DealPrice);
            return ExecuteNonQuery(AddSql) > 0;
        }

        public string PayByWechat(FlashDealItem item, CityMorders payOrder)
        {
            return AddUserPayment(item: item, userId: payOrder.FuserId, payPrice: payOrder.payment_free, payWay: miniAppBuyMode.微信支付, payOrderId: payOrder.Id);
        }

        public bool isPaid(FlashDealItem dealItem,int userId)
        {
            return GetCountByPara(dealId: dealItem.DealId, itemId: dealItem.Id, userId: userId) > 0;
        }

        private string AddUserPayment(FlashDealItem item, int userId, miniAppBuyMode payWay, int payPrice, int payOrderId = 0)
        {
            FlashDeal deal = new FlashDealBLL().GetModel(item.DealId);
            DealSnapshot snapshot = JsonConvert.DeserializeObject<DealSnapshot>(JsonConvert.SerializeObject(deal));
            //支付方式
            snapshot.PayWay = payWay.ToString();
            //支付物品
            snapshot.ItemTitle = item.Title;
            //物品原价
            snapshot.OrigPrice = item.OrigPrice;
            //插入支付记录
            FlashDealPayment payRecord = new FlashDealPayment
            {
                AddTime = DateTime.Now,
                DealId = deal.Id,
                ItemId = item.Id,
                UserId = userId,
                Aid = item.Aid,
                PayWay = (int)payWay,
                PayPrice = payPrice,
                PayOrderId = payOrderId,
                Snapshot = JsonConvert.SerializeObject(snapshot)
            };
            return BuildAddSql(payRecord);
        }

        //public FlashDealPayment GetModelByPara(int? dealId = null, int? itemId = null, int? userId = null)
        //{
        //    string whereSql = BuildWhereSql(dealId: dealId, itemId: itemId, userId: userId);
        //    return GetModel(whereSql);
        //}

        //public List<FlashDealPayment> GetListByPara()
        //{

        //}
        public int GetSaleCount(int itemId)
        {
            string whereSql = BuildWhereSql(itemId: itemId);
            return GetCount(whereSql);
        }

        private int GetCountByPara(int? dealId = null, int? itemId = null, int? userId = null, int? Aid =null, int? payOrderId = null)
        {
            string whereSql = BuildWhereSql(dealId: dealId, itemId: itemId, Aid: Aid, payOrderId: payOrderId);
            return GetCount(whereSql);
        }

        private string BuildWhereSql(int? dealId = null, int? itemId = null,int? userId = null, int? Aid = null, int? payOrderId = null)
        {
            List<string> whereSql = new List<string>();
            if(dealId.HasValue)
            {
                whereSql.Add($"DealId = ({dealId.Value})");
            }
            if (itemId.HasValue)
            {
                whereSql.Add($"ItemId = {itemId.Value}");
            }
            if(userId.HasValue)
            {
                whereSql.Add($"UserId = {userId.Value}");
            }
            if (Aid.HasValue)
            {
                whereSql.Add($"Aid = {Aid.Value}");
            }
            if(payOrderId.HasValue)
            {
                whereSql.Add($"PayOrderID = {payOrderId.Value}");
            }
            return string.Join(" AND ", whereSql);
        }
    }
}
