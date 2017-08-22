# ChatSpace

# Ver
- Ruby: 2.4.1
- Sinatra: 2.0.0

# Command

```

```

# db_design

### usersテーブル

|column|
|:--|
|id|
|name|
|email|
|password|
|password_confirmation|
|timestamp|

### messagesテーブル

|column|
|:--|
|id|
|text|
|image|
|user_id|
|chat_group_id|
| timestamp|

### chat_groupsテーブル

|column|
|:--|
|id|
|name|

### chat_group_usersテーブル

|column|
|:--|
|id|
|user_id|
|chat_group_id|

## association

### usersテーブル
+ has_many chat_group_users
+ has_many chat_groups through chat_group_users
+ has_many messages

### messagesテーブル
+ belongs_to user
+ belongs_to chat_group

### chat_groupsテーブル
+ has_many messages
+ has_many chat_group_users
+ has_many users through chat_group_users

### chat_group_usersテーブル
+ belongs_to user
+ belongs_to chat_group
