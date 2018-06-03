Page({

  /**
   * 页面的初始数据
   */
  data: {
    country_list:['国内',
    '国际','财经','娱乐','体育','其它',],
    hotNews:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data:{
        type:'gj'
      },
      success:res=>{
        let result = res.data.result
        let title = result[0].title
        console.log(title)
        this.setData({
          hotNews:title
        })
      }      
    })
  }
})