set names utf8;
drop database if exists blog;
create database blog charset=utf8;
use blog;

-- 管理员信息
create table b_admin(
  aid int primary key auto_increment,
  username varchar(32),
  password varchar(32)
);

-- 用户信息
create table b_user(
  uid int primary key auto_increment,
  username varchar(32),
  password varchar(32),
  -- avater varchar(255),
  email varchar(255)
  -- create_time datetime
  -- `type` int(11),
  -- update_time datetime
);

-- 博文信息
create table b_blog(
  bid int primary key auto_increment,
  avater varchar(255),
  nickname varchar(32),
  lv int,
  VIP int,
  create_time datetime,
  article varchar(255),
  img varchar(255),
  -- img1 varchar(255),
  `like` int,
  comment int,
  collection int,
  forward int,
  tag varchar(255)
);

-- 博文详情信息
create table b_blogdetail(
  lid int primary key auto_increment,
  avater varchar(255),
  nickname varchar(32),
  lv int,
  VIP int,
  motto_title varchar(255),
  motto_article varchar(255),
  member_origin int,
  member_popularity int,
  member_fans int,
  member_comment int,
  member_translate int,
  member_reprint int,
  member_follow int,
  member_collect int,
  profile_ID int,
  profile_sex boolean,
  profile_city varchar(255),
  profile_autograph varchar(255),
  profile_qq int,
  profile_wx varchar(32),
  profile_wb varchar(32),
  profile_csdn varchar(32),
  blog_title varchar(32),
  blog_article varchar(255),
  blog_harticle varchar(255),
  footp1 varchar(255),
  footp2 varchar(255),
  footdiv varchar(255),
  cid int
);

-- 写博客信息
create table b_writeblog(
  wid int primary key auto_increment,
  title varchar(32),
  content varchar(255),
  `type` varchar(32),
  form varchar(32),
  wtime date
);

-- 插入管理员信息
insert into b_admin value(null,'admin','123456');
-- 插入用户信息
insert into b_user value(null,'yao','123456','1922592002@qq.com');
-- 插入博文信息
insert into b_blog value(null,'','安和桥',9,9,'2022-8-11 13:14','人间百味终有回甘，不顾风雨朝着一个方向全力奔赴。阳光灿烂，鲜花盛开，幸福会来。有所坚持，全力以赴。幸福说得对：“天下没有爬不去的坡，趁着还年轻，把该吃的苦都吃了，剩下的就都是福了。”','img/blog_image1-1.jpg',20,50,9,6,'# 幸福到万家  # 赵丽颖');
insert into b_blog value(null,'','夭夭仙女',6,6,'2022-8-11 13:14','七月的最后一天，出门暴走2w步。夏天在我心里提前画了圆满的句号。走了很多路，拍了很多生活碎片，时光很紧凑。接下来的两个月，要学习文案，精进文字，为国庆假期回我的小城做储备。有所期是件幸福的事。','img/blog_image2.jpg',20,50,9,6,'# 小城风景');
insert into b_blog value(null,'','久久归①',6,6,'2022-8-11 13:14','“我知道那不是我的月亮，但有一刻月光确实照在了我身上。
我知道月光的温柔明亮，我也知道月亮的疏远克制，所以我只能，也只敢遥望。”','img/blog_image3.jpg',20,50,9,6,'# 小城风景');

-- 插入博文详情页信息
insert into b_blogdetail value(null,'','安和桥',6,9,'少年不惧岁月长 彼方尚有荣光','无论岁月的长短，我们要成长，那我们必定会痛苦，被时间逼着跌跌撞撞的前行，然后刻骨铭心的坚强。黑暗总会消失，黎明总会来临，我们每个人都在黑暗里成长，所幸，我们在变强，所幸，曙光在不远之处，所幸，远方还有追寻的实物，哪敢轻言放弃。',8,7,520,30,0,96,32,0,25,'女生','山西平遥，美丽小城','“层楼终究误少年，自由早晚乱余生，你我山前没相见，山后别相逢。”',1922592002,'Sugar。','安和桥g9','weixin_51062406','幸福就是简简单单','人间百味终有回甘，不顾风雨朝着一个方向全力奔赴。阳光灿烂，鲜花盛开，幸福会来。有所坚持，全力以赴。幸福说得对：“天下没有爬不去的坡，趁着还年轻，把该吃的苦都吃了，剩下的就都是福了。”','何幸福说：这世上的事儿，黑黑白白的，谁能分得清楚，能忍就过去了，这个理我不认！咱不惹事，可也不怕事。不能总是平白无故的受人欺负！','性别：女 年龄：23岁','现居：平遥古城','——爱上一匹野马，可我的家里没有草原',1);
insert into b_blogdetail value(null,'','夭夭仙女',7,8,'我希望我所希望的有希望','希望我的希望有希望意思是心想事成，第一个希望是动词，表示盼望后面的事情实现。第二个希望是名词，表示愿望。第三个希望也是名词，表示实现梦想的机会和可能性。',9,9,52,40,1,25,37,7,36,'女生','衍虚天宫','我希望我的希望有希望，希望万里星光，一如既往的热爱。',1789674856,'桃之夭夭','桃夭夭的微bo','weixin_51062406','未来可期','你渴望成为一个更好的人、就努力迈进你所期待进入的圈子、慢慢朝着你憧憬的人走去，努力模仿他们的优秀品质，养成他们的良好习惯，做他们验证过的事、朝他们靠近，成为那束吸引你的光亮的一部分,或许有一天，你朝着期待的方向走了很远很远，终于靠近了你曾经仰望的人物，而你自身也开始散发耀眼夺目的光芒，成了别人眼中值得靠近的对象。”','追逐光，靠近光，成为光。✨希望我们都能够追上那个曾经赋予众望的自己，去遇见生命中的小欢喜。💕','性别：女 年龄：18岁','现居：衍虚天宫','——愿你忠于自己，活得认真，笑得放肆。',2);
insert into b_blogdetail value(null,'','久久归①',4,1,'一个今天胜过两个明天。','古人秉烛夜游，唯恐不能阅尽世间繁华美好。人生不如意十有八九，随遇而安听起来并不昂扬奋进，但也是应对困境的良好心态，在烦恼痛苦纠结中蹉跎掉美好时光，是不是很可惜？',8,7,520,30,0,96,32,0,25,'女生','山西平遥，美丽小城','未来少预想，尽量别假设，把拥有当全部，看当下成永远。',4569592002,'安①','等风吹，待人归','weixin_51062406','面朝大海，春暖花开','“从明天起，做一个幸福的人，喂马、劈柴，周游世界；从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开……给每一条河每一座山取一个温暖的名字；陌生人，我也为你祝福，愿你有一个灿烂的前程，愿你有情人终成眷属，愿你在尘世获得幸福，我只愿面朝大海，春暖花开。”','从今天起，我决定成为一个幸福的人，有爱、有故事、有春暖花开，心中还有爱，踮起脚尖才够得着你的温度，幸福与你有关、与我有关，与我们有关！','性别：女 年龄：21岁','现居：海边','——一个今天胜过两个明天。',3);

-- 插入写博文信息
insert into b_writeblog value(null,'人生','人生美好','生活','全部可见','2022-8-20');