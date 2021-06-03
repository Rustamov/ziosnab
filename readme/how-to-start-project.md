# Как начать новый проект?
Обычно этим будет заниматься разработчик (ведущий разработчик), за кем закреплен этот проект.

### Клонируй проект

Клонируем проект в папку `new-project` и переходим в нее
```
git clone https://github.com/Rustamov/start-template.git project-name && cd project-name
```

### Создай новый репозиторий

Создаем репозиторий с названием проекта
```https://gitlab.com/Rustamov/project-name```

### Инициализация GIT

`rm -rf .git` - удаляем папку `.git`, избавляясь от избыточной истории коммитов шаблона.

`git init` - инициализация Git

`git add -A` - индексация всех файлов

`git commit -m "Start"` - коммитим все изменения

`git remote add origin https://github.com/Rustamov/project-name.git` - добавляем адресс созданного репозитория

`git push origin master` - пушим изменения

`git pull --rebase origin master` - если репа не пустая, потом снова пуш.
