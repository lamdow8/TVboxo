var rule={
    title:'厂长资源',
    host:'https://www.guazitv.tv',
    //https://www.guazitv.tv/video/list?channel_id=fyclass&tag=0
     //host:'WWW.CZZY.TV',
    url:'/video/list?channel_id=fyclass&tag=0',
    searchUrl:'/xssearch?q=**&f=_all&p=fypage',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{'User-Agent':'UC_UA', },
    play_parse:true,
    lazy:'',
    limit:6,
    class_name:'电影&电视剧&综艺&动漫&纪录片&世界杯',
    class_url:'1&2&3&4&32&33',
    推荐:'.bt_img;ul&&li;*;*;*;*',
    double:true,
    一级:'dd;h5&&Text;img&&originalsrc;.mark&&Text;a&&href',
    二级:{"title":"h1&&Text;.moviedteail_list li&&a&&Text","img":"div.dyimg img&&src","desc":".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7) a&&Text;.moviedteail_list li:eq(5) a&&Text","content":".yp_context&&Text","tabs":".mi_paly_box&&span","lists":".paly_list_btn:eq(#id) a"},
    搜索:'.search_list&&ul&&li;*;*;*;*',
}
