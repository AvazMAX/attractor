Всем привет, меня зовут Аваз.
Это про то как использовать мое приложения.
Для начало вам понодобиться сделать клон приложения.
Для этого откроете любой терминал и выберите путь куда хотите клонировать, 
дальше ставьте это "git clone https://github.com/AvazMAX/attractor.git".
Когда закончится клонирование установите пакеты node командой "npm/yarn install".
Потом запустите React приложение командой "npm/yarn start" (важно чтобы оно запустилось на порту https://localhost:3000).
Дальше нужно запустить Node.js, для этого откройте другой новый терминал и запустите его командой "node Express.js".
После всего этого откроется sign in page где есть фото из моего любимого аниме и кнопка авторизации нажимая на него вас перенаправит в git hub в мое OAuth приложения там нажимаете на кнопку авторизации и вас перенаправит на порт node 3001 от туда получая токен через path, вас обратно перенаправит в порт 3000 где мы получаем токен в path и храним его в localStorage, и так вам откроется ваш git hub профиль с вашими репозироиями.
Нажимая на аватар в header вам откроется meatballs там есть logout, профиль страница в которой вы находитесь и users там можно искать других пользователей.
(и хотел еще раз напомнить что github api мне кажеться изменился у меня щас не работает edit profile который работал.И не видны репозитории которые были видны.)
