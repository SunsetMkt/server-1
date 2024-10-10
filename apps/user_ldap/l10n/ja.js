OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "マッピングをクリアできませんでした。",
    "Failed to delete the server configuration" : "サーバー設定を削除できませんでした",
    "Invalid configuration: Anonymous binding is not allowed." : "設定が間違っています: 匿名接続は、許可されていません。",
    "Valid configuration, connection established!" : "正しい設定です。接続されました。",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "設定は有効ですが、接続に失敗しました。サーバー設定と資格情報を確認してください。",
    "Invalid configuration. Please have a look at the logs for further details." : "設定が無効です。詳細はログを確認してください。",
    "No action specified" : "アクションが指定されていません",
    "No configuration specified" : "構成が指定されていません",
    "No data specified" : "データが指定されていません",
    "Invalid data specified" : "無効なデータが指定されました",
    " Could not set configuration %s" : "構成 %s を設定できませんでした",
    "Action does not exist" : "アクションが存在しません",
    "Renewing …" : "更新中 ...",
    "Very weak password" : "非常に弱いパスワードです",
    "Weak password" : "脆弱なパスワード",
    "So-so password" : "悪くないパスワード",
    "Good password" : "良いパスワード",
    "Strong password" : "強固なパスワード",
    "The Base DN appears to be wrong" : "ベース DN が誤っている可能性があります",
    "Testing configuration…" : "設定検証中…",
    "Configuration incorrect" : "設定に誤りがあります",
    "Configuration incomplete" : "設定が不完全です",
    "Configuration OK" : "設定OK",
    "Select groups" : "グループを選択",
    "Select object classes" : "オブジェクトクラスを選択",
    "Please check the credentials, they seem to be wrong." : "資格情報が間違っていると思われます。確認してください。",
    "Please specify the port, it could not be auto-detected." : "ポートを指定してください。自動認識できません。",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "ベース DN を自動検出できませんでした。資格情報、ホスト、ポートを修正してください。",
    "Could not detect Base DN, please enter it manually." : "ベース DN を検出できませんでした。手動で入力してください。",
    "{nthServer}. Server" : "{nthServer}. サーバー",
    "No object found in the given Base DN. Please revise." : "指定されたベース DN でオブジェクトを見つけることができませんでした。修正をお願いします。",
    "More than 1,000 directory entries available." : "1,000以上のディレクトリエントリが利用可能です。",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["入力されたベースDNで{objectsFound}エントリーが利用可能"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "エラーが発生しました。ベースDNをチェックし、接続設定と権限についても同様に確認してください。",
    "Do you really want to delete the current Server Configuration?" : "現在のサーバー設定を本当に削除してもよろしいですか？",
    "Confirm Deletion" : "削除の確認",
    "Mappings cleared successfully!" : "マッピングのクリアに成功しました！",
    "Error while clearing the mappings." : "マッピングのクリアー中にエラーが発生しました。",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "匿名接続が許可されていません。ユーザーDNとパスワードを入力してください。",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP操作エラー。匿名接続が許可されていないのかもしれません。",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "保存に失敗。データベースが稼働中か確認してください。続ける前にリロードしてください。",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "モード切替により自動LDAP問合せが有効になります。LDAPのデータ量により時間がかかる可能性があります。モードを切り替えますか？",
    "Mode switch" : "モード変更",
    "Select attributes" : "属性を選択",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "ユーザーは見つかりませんでした。ログインの属性とユーザー名をチェックしてください。適用されているフィルター(コピーペーストしてコマンドラインでの確認できます): <br/>",
    "User found and settings verified." : "ユーザーが見つかり、設定が検証できました。",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "最初のユーザーだけがログインできるよう、多くのユーザーを網羅しつつ検索を絞るようにしてください。",
    "An unspecified error occurred. Please check log and settings." : "不明なエラーが発生しました。設定とログを確認してください。",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "検索フィルターが不正です。恐らく文法の問題で、開き括弧と閉じ括弧がマッチしていません。修正をお願いします。",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "LDAP/AD接続エラーが発生しました。ホスト名、ポート、および資格情報を確認してください。",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "\"%u\" id のプレースホルダがありません。プレースホルダは、LDAP /ADで問合せするときにログイン名で置き換えられます。",
    "Please provide a login name to test against" : "テストの為にログイン名を入力してください。",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "LDAP/ADサーバーがMemberOfオプションをサポートしていないため、グループボックスは無効になりました。",
    "Password change rejected. Hint: " : "パスワード変更が拒否されました。ヒント：",
    "Please login with the new password" : "新しいパスワードでログインしてください",
    "LDAP User backend" : "LDAPユーザーバックエンド",
    "Your password will expire tomorrow." : "パスワードが明日期限切れになります。",
    "Your password will expire today." : "パスワードが今日期限切れになります。",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["パスワードがあと %n日で期限切れになります。"],
    "LDAP/AD integration" : "LDAP/AD統合",
    "LDAP Connection" : "LDAP接続",
    "_Binding failed for this LDAP configuration: %s_::_Binding failed for %n LDAP configurations: %s_" : ["%n 個のLDAP設定のバインディングに失敗しました： %s"],
    "_Searching failed for this LDAP configuration: %s_::_Searching failed for %n LDAP configurations: %s_" : ["%n 個のLDAP設定の検索に失敗しました： %s"],
    "_There is an inactive LDAP configuration: %s_::_There are %n inactive LDAP configurations: %s_" : ["非アクティブなLDAPコンフィギュレーションが%n個あります： %s"],
    "_Binding and searching works on the configured LDAP connection (%s)_::_Binding and searching works on all of the %n configured LDAP connections (%s)_" : ["バインディングと検索は、設定された%nのLDAP接続すべてで機能します(%s)"],
    "Invalid LDAP UUIDs" : "無効な LDAP UUID",
    "None found" : "該当なし",
    "Invalid UUIDs of LDAP accounts or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "LDAPアカウントまたはグループの無効なUUIDが見つかりました。LDAP設定のエキスパート部分にある \"Override UUID detection\" の設定を見直して、\"occ ldap:update-uuid\"を使ってアップデートしてください。",
    "_%n group found_::_%n groups found_" : ["グループ%nが見つかりました "],
    "> 1000 groups found" : "1000 以上のグループが見つかりました",
    "> 1000 users found" : "1000 以上のユーザーが見つかりました",
    "_%n user found_::_%n users found_" : ["ユーザー%n が見つかりました"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "ユーザー表示名の属性を検出できませんでした。詳細設定で対応する属性を指定してください。",
    "Could not find the desired feature" : "望ましい機能は見つかりませんでした",
    "Invalid Host" : "無効なホスト",
    "LDAP user and group backend" : "ユーザー・グループのLDAP連携",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "このアプリケーションを使用すると、管理者はLDAPベースのユーザーディレクトリにNextcloudを接続できます。",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "このアプリケーションを使用すると、管理者は認証、プロビジョニングのためにLDAPベースのユーザーディレクトリにNextcloudを接続し、ユーザー、グループ、およびユーザー属性をプロビジョニングできます。 管理者は、LDAPインターフェイス経由で1つまたは複数のLDAPディレクトリまたはActive Directoryに接続するようにこのアプリケーションを設定できます。 ユーザークオータ、電子メール、アバターピクチャ、グループメンバーシップなどの属性は、適切なクエリとフィルタを使用してディレクトリからNextcloudに取り込むことができます。ユーザーはLDAPまたはAD資格情報でNextcloudにログインし、 LDAPまたはADサーバーによって処理される認証要求。 NextcloudはLDAPまたはADのパスワードを格納しませんが、これらの資格情報はユーザーの認証に使用され、NextcloudはユーザーIDのセッションを使用します。 詳細は、LDAPユーザーおよびグループのバックエンドのドキュメントを参照してください。",
    "Test Configuration" : "設定をテスト",
    "Help" : "ヘルプ",
    "Groups meeting these criteria are available in %s:" : "これらの基準を満たすグループが %s で利用可能:",
    "Only these object classes:" : "このオブジェクトクラスからのみ:",
    "Only from these groups:" : "これらのグループからのみ:",
    "Search groups" : "グループを検索",
    "Available groups" : "利用可能なグループ",
    "Selected groups" : "選択されたグループ",
    "Edit LDAP Query" : "LDAPクエリの編集",
    "LDAP Filter:" : "LDAP フィルタ：",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "フィルターは、どの LDAP グループが %s にアクセスするかを指定します。",
    "Verify settings and count the groups" : "設定を検証し、グループを数える",
    "When logging in, %s will find the user based on the following attributes:" : "ログイン時に、%s  により次の属性からユーザーを見つけます:",
    "LDAP/AD Username:" : "LDAP/ADユーザー名:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "LDAP/ADユーザー名に対してログインが許可されています。\"uid\" か、\"sAMAccountName\" のどちらかが検出されました。",
    "LDAP/AD Email Address:" : "LDAP/ADメールアドレス:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "メール属性に対してログインが許可されています。\"mail\" と \"mailPrimaryAddress\" が利用可能です。",
    "Other Attributes:" : "その他の属性:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "ログイン実行時に適用するフィルターを定義します。uid \"%%\" にはログイン操作におけるユーザー名が入ります。例： \"uid=%%uid\"",
    "Test Loginname" : "テスト用ログイン名",
    "Attempts to receive a DN for the given loginname and the current login filter" : "指定されたログイン名と現在のログインフィルタのDNを取得します",
    "Verify settings" : "設定のチェック",
    "%s. Server:" : "%s. サーバー:",
    "Add a new configuration" : "新しい設定を追加",
    "Copy current configuration into new directory binding" : "現在の設定を新しいディレクトリ設定にコピー",
    "Delete the current configuration" : "現在の設定を削除",
    "Host" : "ホスト",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "SSL通信しない場合には、プロトコル名を省略することができます。そうでない場合には、ldaps:// を頭につけてください。",
    "Port" : "ポート",
    "Detect Port" : "ポートの検出",
    "User DN" : "ユーザーDN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "どのクライアントユーザーのDNで接続するか指定します。例えば uid=agent,dc=example,dc=com になります。匿名アクセスの場合、DNとパスワードは空のままにしてください。",
    "Password" : "パスワード",
    "For anonymous access, leave DN and Password empty." : "匿名アクセスの場合は、DNとパスワードを空のままにしてください。",
    "Save Credentials" : "資格情報を保存",
    "One Base DN per line" : "1行に1つのベースDNを記入",
    "You can specify Base DN for users and groups in the Advanced tab" : "詳細設定でユーザーとグループのベースDNを指定することができます。",
    "Detect Base DN" : "ベース DN を検出",
    "Test Base DN" : "ベースDN をテスト",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "自動的なLDAP問合せを停止します。大規模な設定には適していますが、LDAPの知識が必要になります。",
    "Manually enter LDAP filters (recommended for large directories)" : "手動でLDAPフィルターを入力(大規模ディレクトリ時のみ推奨)",
    "Listing and searching for users is constrained by these criteria:" : "ユーザーの表示と検索は、次の基準で制約されます:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "ユーザーの最も一般的なオブジェクトクラスは、organizationalPerson, person, user と inetOrgPerson です。もし、どのオブジェクトを選択すれば良いか分からない場合は、ディレクトリ管理者に相談してください。",
    "The filter specifies which LDAP users shall have access to the %s instance." : "フィルターは、どのLDAPユーザーが %s にアクセスするかを指定します。",
    "Verify settings and count users" : "設定を検証し、ユーザーを数える",
    "Saving" : "保存中",
    "Back" : "戻る",
    "Continue" : "続ける",
    "Please renew your password." : "パスワードを更新",
    "An internal error occurred." : "内部エラーが発生しました。",
    "Please try again or contact your administrator." : "もう一度試してみるか、管理者に問い合わせてください。",
    "Current password" : "現在のパスワード",
    "New password" : "新しいパスワード",
    "Renew password" : "パスワードを更新",
    "Wrong password." : "パスワードが間違っています。",
    "Cancel" : "キャンセル",
    "Server" : "サーバー",
    "Users" : "ユーザー",
    "Login Attributes" : "ログイン属性",
    "Groups" : "グループ",
    "Expert" : "エキスパート設定",
    "Advanced" : "詳細設定",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>警告:</b> PHP LDAP モジュールがインストールされていません。バックエンド接続が正しく動作しません。システム管理者にインストールするよう問い合わせてください。",
    "Connection Settings" : "接続設定",
    "Configuration Active" : "設定は有効です",
    "When unchecked, this configuration will be skipped." : "チェックを外すと、この設定はスキップされます。",
    "Backup (Replica) Host" : "バックアップ（レプリカ）ホスト",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "バックアップホストをオプションで指定することができます。メインのLDAP/ADサーバーのレプリカである必要があります。",
    "Backup (Replica) Port" : "バックアップ（レプリカ）ポート",
    "Disable Main Server" : "メインサーバーを無効にする",
    "Only connect to the replica server." : "レプリカサーバーにのみ接続します。",
    "Turn off SSL certificate validation." : "SSL証明書の確認を無効にする。",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "推奨されません、テストにおいてのみ使用してください！このオプションでのみ接続が動作する場合は、LDAP サーバーのSSL証明書を %s サーバーにインポートしてください。",
    "Cache Time-To-Live" : "キャッシュのTTL",
    "in seconds. A change empties the cache." : "秒。変更後にキャッシュがクリアされます。",
    "Directory Settings" : "ディレクトリ設定",
    "User Display Name Field" : "ユーザー表示名のフィールド",
    "The LDAP attribute to use to generate the user's display name." : "ユーザーの表示名の生成に利用するLDAP属性",
    "2nd User Display Name Field" : "第2ユーザー表示名のフィールド",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "オプションです。表示名内にカッコ付きで追加表示される属性　例：»John Doe (john.doe@example.org)«.",
    "Base User Tree" : "ベースユーザーツリー",
    "One User Base DN per line" : "1行に1つのユーザーベースDN",
    "User Search Attributes" : "ユーザー検索属性",
    "Optional; one attribute per line" : "オプション：1行に1属性",
    "Disable users missing from LDAP" : "LDAPから消えたユーザーを無効にする",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "オンにすると、LDAPからインポートされたユーザーのうち欠落しているユーザーは無効になります。",
    "Group Display Name Field" : "グループ表示名のフィールド",
    "The LDAP attribute to use to generate the groups's display name." : "ユーザーのグループ表示名の生成に利用するLDAP属性",
    "Base Group Tree" : "ベースグループツリー",
    "One Group Base DN per line" : "1行に1つのグループベースDN",
    "Group Search Attributes" : "グループ検索属性",
    "Group-Member association" : "グループとメンバーの関連付け",
    "Dynamic Group Member URL" : "ダイナミックグループメンバーURL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "グループオブジェクト上のLDAP属性はグループに属するオブジェクトを決定するLDAP検索URLを含みます｡(空の設定はダイナミックグループメンバーシップが機能的に無効になります｡)",
    "Nested Groups" : "ネストされたグループ",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "オンにすると、グループを含むグループが有効になります。(グループメンバーの属性にDNが含まれる場合のみ利用できます。)",
    "Paging chunksize" : "ページ分割サイズ",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "ページ分割サイズは、LDAP検索時にユーザーやグループのリスト一覧データを一括で返すデータ量を指定します。(設定が0の場合には、LDAP検索の分割転送は無効)",
    "Enable LDAP password changes per user" : "ユーザーごとにLDAPパスワードの変更を有効にする",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "LDAPユーザーがLDAPのパスワードを変更できるようにし、スーパー管理者とグループ管理者がLDAPユーザーのパスワードを変更できるようにします。 これは、LDAPサーバーでアクセス制御ポリシーが設定されている場合にのみ動作します。この時パスワードは平文でLDAPサーバーに送信されるため、TCP接続の暗号化を使用する必要があり、LDAPサーバー側でパスワードをハッシュ化する必要があります。",
    "(New password is sent as plain text to LDAP)" : "(新しいパスワードは平文テキストで LDAP に送信されます)",
    "Default password policy DN" : "デフォルトのパスワードポリシーの DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "デフォルトパスワードポリシーのDN はユーザーのパスワード期限切れ動作に利用されます。これは、OpenLDAPでのみ利用でき、ユーザーごとにLDAPパスワード変更が有効になっているときにのみ適用できます。パスワード期限切れを利用しない場合は、空欄のままにしてください。",
    "Special Attributes" : "特殊属性",
    "Quota Field" : "クオータ属性",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "ユーザーのデフォルトのクオータを空のままにしてください。 または、LDAP/ADの属性を指定してください。",
    "Quota Default" : "クオータのデフォルト",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "クオータフィールドでクオータが設定されていないLDAPユーザーのデフォルトのクオータを上書きします。",
    "Email Field" : "メール属性",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "LDAP属性からユーザーのメールを設定します。 デフォルト動作では空のままにします。",
    "User Home Folder Naming Rule" : "ユーザーのホームフォルダー命名規則",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "ユーザー名は空のままにしてください（デフォルト）。それ以外の場合は、LDAP/AD属性を指定します。",
    "\"$home\" Placeholder Field" : "\"$home\" 属性設定",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "外部ストレージ設定の $home 変数には、指定した属性の値が入ります",
    "User Profile Attributes" : "ユーザープロファイル属性",
    "Phone Field" : "電話番号 フィールド",
    "User profile Phone will be set from the specified attribute" : "ユーザープロファイルの電話番号は、指定された属性から設定されます。",
    "Website Field" : "ウェブサイト フィールド",
    "User profile Website will be set from the specified attribute" : "ユーザープロファイルのウェブサイトは、指定された属性から設定されます。",
    "Address Field" : "住所 フィールド",
    "User profile Address will be set from the specified attribute" : "ユーザープロファイルの住所は、指定された属性から設定されます。",
    "Twitter Field" : "Twitter フィールド",
    "User profile Twitter will be set from the specified attribute" : "ユーザープロファイルの Twitter は、指定された属性から設定されます。",
    "Fediverse Field" : "Fediverse フィールド",
    "User profile Fediverse will be set from the specified attribute" : "ユーザープロファイルの Fediverse は、指定された属性から設定されます。",
    "Organisation Field" : "組織 フィールド",
    "User profile Organisation will be set from the specified attribute" : "ユーザープロファイルの組織は、指定された属性から設定されます。",
    "Role Field" : "役職 フィールド",
    "User profile Role will be set from the specified attribute" : "ユーザープロファイルの役職は、指定された属性から設定されます。",
    "Headline Field" : "ヘッドライン フィールド",
    "User profile Headline will be set from the specified attribute" : "ユーザープロファイルのヘッドラインは、指定された属性から設定されます。",
    "Biography Field" : "経歴 フィールド",
    "User profile Biography will be set from the specified attribute" : "ユーザープロファイルの経歴は、指定された属性から設定されます。",
    "Birthdate Field" : "誕生日フィールド",
    "User profile Date of birth will be set from the specified attribute" : "生年月日のユーザープロフィールは、指定された属性から設定されます",
    "Pronouns Field" : "代名詞フィールド",
    "User profile Pronouns will be set from the specified attribute" : "ユーザープロファイルの代名詞は、指定された属性から設定されます",
    "Internal Username" : "内部ユーザー名",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "デフォルトでは、内部的なユーザー名がUUID属性から作成されます。これにより、ユーザー名がユニークであり、かつ文字の変換が不要であることを保証します。内部ユーザー名には、[ a-zA-Z0-9_.@- ] の文字のみが有効であるという制限があり、その他の文字は対応する ASCII コードに変換されるか単に無視されます。そのため、他のユーザー名との衝突の回数が増加するでしょう。内部ユーザー名は、内部的にユーザーを識別するために用いられ、また、Nextcloud におけるデフォルトのホームフォルダー名としても用いられます。例えば*DAVサービスのように、リモートURLの一部でもあります。この設定により、デフォルトの振る舞いを再定義します。これは、たとえばすべての* DAVサービスのリモートURLの一部でもあります。この設定を使用すると、デフォルトの動作を上書きできます。変更は、新しくマップされた（追加された）LDAPユーザーにのみ影響します。デフォルトの動作のために空のままにします。",
    "Internal Username Attribute:" : "内部ユーザー名属性:",
    "Override UUID detection" : "UUID検出を再定義する",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "デフォルトでは、UUID 属性は自動的に検出されます。UUID属性は、LDAPユーザーとLDAPグループを間違いなく識別するために利用されます。また、もしこれを指定しない場合は、内部ユーザー名はUUIDに基づいて作成されます。この設定は再定義することができ、あなたの選択した属性を用いることができます。選択した属性がユーザーとグループの両方に対して適用でき、かつユニークであることを確認してください。空であればデフォルトの振る舞いとなります。変更は、新しくマッピング（追加）されたLDAPユーザーとLDAPグループに対してのみ有効となります。",
    "UUID Attribute for Users:" : "ユーザーのUUID属性:",
    "UUID Attribute for Groups:" : "グループの UUID 属性:",
    "Username-LDAP User Mapping" : "ユーザー名とLDAPユーザーのマッピング",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "ユーザー名は、メタデータの保存と割り当てに使用されます。 ユーザーを正確に識別して認識するために、各LDAPユーザーには内部ユーザー名が割り当てられます。 これには、ユーザー名からLDAPユーザーへのマッピングが必要です。 作成されたユーザー名は、LDAPユーザーのUUIDにマップされます。 さらに、DNはLDAPインタラクションを減らすためにキャッシュされますが、識別には使用されません。 DNが変更された場合、変更が検出されます。 内部ユーザー名はいたるところで使用されます。 マッピングをクリアすると、どこに残っているか分かります。 マッピングの消去はコンフィギュレーションセンシティブではなく、すべてのLDAP構成に影響します。 本番環境のマッピングをクリアしないでください。テスト環境または実験段階でのみ実施してください。",
    "Clear Username-LDAP User Mapping" : "ユーザー名とLDAPユーザーのマッピングをクリアする",
    "Clear Groupname-LDAP Group Mapping" : "グループ名とLDAPグループのマッピングをクリアする",
    "Invalid UUIDs of LDAP users or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "無効なLDAPユーザーまたはグループのUUIDが見つかりました。LDAP設定の詳細設定に存在する\"UUID検出の上書き\"設定を再度ご確認いただき、更新するには\"occ ldap:update-uuid\"をご使用ください。"
},
"nplurals=1; plural=0;");
