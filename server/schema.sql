-- DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id int(5) NOT NULL AUTO_INCREMENT,
  user_id int(5),
  message varchar(215),
  roomname varchar(100),
  PRIMARY KEY (message_id),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE friends (
  user_id_1 int(5) NOT NULL,
  user_id_2 int(5) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  user_id int(5) NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);

-- ALTER TABLE messages ADD CONSTRAINT messages_fk0 FOREIGN KEY (user_id) REFERENCES users(user_id);

-- ALTER TABLE friends ADD CONSTRAINT friends_fk0 FOREIGN KEY (user_id_1) REFERENCES users(user_id);
-- ALTER TABLE friends ADD CONSTRAINT friends_fk1 FOREIGN KEY (user_id_2) REFERENCES users(user_id);