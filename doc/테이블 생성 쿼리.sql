use cqfaq;

create table user(
	loginid varchar(45) not null,
    password varchar(1000) not null
);

create table board(
	bno int not null auto_increment primary key,
    boardcode int,
    title varchar(50) not null,
    content text,
	orderby int
);

create table board_code(
	bno int not null auto_increment primary key,
    code int,
    name varchar(50),
    context text,
    route varchar(50)
);



insert into user(loginid, password)
values ('admin', '9c362d362b0f08e78c0ddf1d9b9ea6807b589dfefda643b1c7edd98d536dca4e42608de7cbd919b07b4fa0fa4642c1e8712ed5d82d4bd96dfd207c1d12df2df5');

insert into board(title, boardcode, content, orderby)
values ('리세마라가 뭐에요?', '1', '리세마라란 원하는 용사가 나올때까지 계속해서 처음부터 다시 시작하는것을 뜻합니다.<br/>좋은 용사를 가지고 있다면 시작할때 유리하니까요.', 1);

update board set content = '리세마라란 원하는 용사가 나올때까지 계속해서 처음부터 다시 시작하는것을 뜻합니다. 좋은 용사를 가지고 있다면 시작할때 유리하니까요.' where bno = 1;

select *
from board;


select *
from board_code;


insert into board_code(code, name, context, route)
values ('1', '게임시작', '게임은 어떻게 시작해야 할까요?', '/start');

insert into board_code(code, name, context, route)
values ('2', '시나리오(도전)', '시나리오는 어떻게 해야해요?', '/challenge');

insert into board_code(code, name, context, route)
values ('3', '결투장', '결투장은 뭐가 좋아요?', '/duel');

insert into board_code(code, name, context, route)
values ('4', '토벌', '토벌 공략이 어떻게 됩니까?', '/boss');

insert into board_code(code, name, context, route)
values ('5', '이벤트', '이 이벤트는 어떻게 참여해요?', '/event');

insert into board_code(code, name, context, route)
values ('6', '기타', '그 외에 다른 질문들이 있어요!', '/etc');