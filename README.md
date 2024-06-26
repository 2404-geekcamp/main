# 環境構築手順
## ライブラリのインストール
### Webサーバ側（React）
```sh
cd client
npm i
cd ..
```

### APIサーバ側（Express）
```sh
cd server
npm i
cd ..
```


## 実行
※ 2枚コンソールを起動して、それぞれの画面で実行してね

### Webサーバ側（React）
```sh
cd client
npm run dev
```

### APIサーバ側（Express）
```sh
cd server
npm run dev
```

## データベーステスト環境構築
このURLにアクセスしてログイン https://supabase.com/dashboard/projects

ダッシュボードからNew Project選択して名前とパスワードを設定して作成する。

プロジェクトに入ったら左のスライドバーのSQL Editorへ移動しクエリ文が書けるページが出てくるので下記を張り付けて実行

```
CREATE TABLE chats (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE experience_options (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE stance_options (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    experience_option_id INT,
    stance_option_id INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (experience_option_id) REFERENCES experience_options(id) ON DELETE SET NULL,
    FOREIGN KEY (stance_option_id) REFERENCES stance_options(id) ON DELETE SET NULL
);

CREATE TABLE chat_histories (
    id SERIAL PRIMARY KEY,
    chat_id INT NOT NULL,
    sender_id INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (chat_id) REFERENCES chats(id),
    FOREIGN KEY (sender_id) REFERENCES users(id)
);


CREATE TABLE joins (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    chat_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (chat_id) REFERENCES chats(id)
);

CREATE TABLE invite_messages (
    id SERIAL PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    content VARCHAR(255),
    is_checked BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

CREATE TABLE user_skills (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    skill_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE SET NULL
);
```

## 環境変数の設定
.env.exampleファイルをコピーして.envファイルを作成<br>
supabaseのプロジェクトの中のサイドバーのproject settingsのページに飛ぶ<br>
APIという項目があるのでそのにPorjectURLとProjectAPIkeysのanonpublicの方をそれぞれSUPABASE_PROJECT_URLとSUPABASE_PROJECT_KEYに設定する。


## updated_atカラムにトリガーを設定
subapaseのSQLEditorで実行
```
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on public.users
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.chats
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.skills
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.experience_options
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.stance_options
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.chat_histories
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.joins
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.invite_messages
  for each row execute procedure moddatetime (updated_at);

create trigger handle_updated_at before update on public.user_skills
  for each row execute procedure moddatetime (updated_at);
```

# タイムゾーンをAsia/Tokyoに変更する
supabaseのSQLEditorで実行
```
alter database postgres
set timezone to 'Asia/Tokyo';
```
