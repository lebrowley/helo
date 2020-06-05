INSERT INTO users
(username, password)
VALUES
($1, $2);

SELECT * FROM users
WHERE username = $1; 



-- INSERT INTO users
-- (profile_pic)
-- VALUES
-- ('https://robohash.org/toad');