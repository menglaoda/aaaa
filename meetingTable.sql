/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/11/1 11:47:40                           */
/*==============================================================*/
drop database if exists meetingdb;

create database meetingdb;

use meetingdb;

drop table if exists apply;

drop table if exists arrange;

drop table if exists human;

drop table if exists meeting;

drop table if exists minutes;

drop table if exists summary;

/*==============================================================*/
/* Table: apply                                                 */
/*==============================================================*/
create table apply
(
   meetingId            int not null,
   applyTime            datetime,
   passornot            bool,
   primary key (meetingId)
);

/*==============================================================*/
/* Table: arrange                                               */
/*==============================================================*/
create table arrange
(
   arrangeId            int not null,
   mtName               varchar(100),
   mtPlace              varchar(100),
   mtTime               datetime,
   atHumans             varchar(1000),
   primary key (arrangeId)
);

/*==============================================================*/
/* Table: human                                                 */
/*==============================================================*/
create table human
(
   arrangeId            int,
   humanId              int not null,
   humanNum             varchar(100),
   humanPassword        varchar(100),
   humanName            varchar(100),
   humanPhone           varchar(100),
   humanEmail           varchar(100),
   primary key (humanId)
);

/*==============================================================*/
/* Table: meeting                                               */
/*==============================================================*/
create table meeting
(
   meetingId            int not null,
   arrangeId            int,
   mtName               varchar(100),
   mtContent            text,
   mtPlace              varchar(100),
   stTime               datetime,
   ovTime               datetime,
   primary key (meetingId)
);

/*==============================================================*/
/* Table: minutes                                               */
/*==============================================================*/
create table minutes
(
   meetingId            int,
   minutesId            int not null,
   humanId              int,
   minutesCon           text,
   primary key (minutesId)
);

/*==============================================================*/
/* Table: summary                                               */
/*==============================================================*/
create table summary
(
   meetingId            int,
   summaryId            int not null,
   humanId              int,
   summaryCon           text,
   summaryTime          date,
   primary key (summaryId)
);

alter table apply add constraint FK_Relationship_1 foreign key (meetingId)
      references meeting (meetingId) on delete restrict on update restrict;

alter table human add constraint FK_Relationship_3 foreign key (arrangeId)
      references arrange (arrangeId) on delete restrict on update restrict;

alter table meeting add constraint FK_Relationship_8 foreign key (arrangeId)
      references arrange (arrangeId) on delete restrict on update restrict;

alter table minutes add constraint FK_Relationship_4 foreign key (humanId)
      references human (humanId) on delete restrict on update restrict;

alter table minutes add constraint FK_Relationship_6 foreign key (meetingId)
      references meeting (meetingId) on delete restrict on update restrict;

alter table summary add constraint FK_Relationship_5 foreign key (humanId)
      references human (humanId) on delete restrict on update restrict;

alter table summary add constraint FK_Relationship_7 foreign key (meetingId)
      references meeting (meetingId) on delete restrict on update restrict;

