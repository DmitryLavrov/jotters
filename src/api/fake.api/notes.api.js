import API from '../index'
import convertToPlain from '../../utils/convertToPlain'

const notes = [
  {
    _id: 'n01',
    jotterId: 'j01',
    private: false,
    updateDate: '2021-09-21',
    title: 'Одна из заметок',
    content: '<p><strong style="color: rgb(0, 0, 0);">Одна из заметок </strong><span style="color: rgb(0, 0, 0);">на зеркале заднего вида в моем автомобиле: "Пожалуйста, пристегните ремни, мы возвращаемся".</span></p><p><span style="color: rgb(0, 0, 0);">Я вижу женщину на фотографии, которую я приклеил скотчем к лобовому стеклу.</span></p><p><span style="color: rgb(0, 0, 0);">Она улыбалась, и я знал, что это должно было помочь ей выжить.</span></p><p><span style="color: rgb(0, 0, 0);">Так и произошло. </span></p><p><span style="color: rgb(0, 0, 0);">Сейчас она все еще жива, но уже не улыбается.</span></p><p><span style="color: rgb(230, 0, 0);">(*По материалам CBS New York)</span></p><p><span style="color: rgb(0, 0, 0);">В интернете есть специальные сайты, на которых есть все для ремонта вашего компьютера.</span></p>'
  },
  {
    _id: 'n02',
    jotterId: 'j01',
    private: false,
    updateDate: '2021-09-22',
    title: 'Другая заметка',
    content: '<p><strong>Другая заметка: </strong>моя дочь, которой 6 лет, и которую я на днях отодрал за уши, ходит с моими серьгами в своем школьном портфеле.</p><p>На каждой перемене.</p><p>Задаю ей вопрос: — А почему ты носишь мои серьги? Она отвечает: — Мама сказала, чтобы я никогда про твои не забывала.</p><p>— Что она обо мне сказала? — спрашиваю. —</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>'
  },
  {
    _id: 'n03',
    jotterId: 'j01',
    private: true,
    updateDate: '2021-09-24',
    title: 'Зачетный полет',
    content: '<p><h1><strong style="color: rgb(0, 0, 0);">Зачетный полет </strong></h1><p><span style="color: rgb(0, 0, 0);">с лестницы на каблуках.</span></p><p><strong style="color: rgb(153, 51, 255);">Если бы это была не подруга, то я бы еще подумала, а так..</strong><span style="color: rgb(0, 0, 0);">.</span></p><p><span style="color: rgb(0, 0, 0);">Просто повезло, хорошо хоть без переломов.</span></p><p><span style="color: rgb(0, 0, 0);">У меня есть традиция: новый год я встречаю в платье.</span></p><p><span style="color: rgb(0, 0, 0);">И все бы ничего, но только платье это - свадебное.</span></p>'
  },
  {
    _id: 'n04',
    jotterId: 'j01',
    private: true,
    updateDate: '2021-09-26',
    title: 'Веселый скандал',
    content: '<p><strong style="color: rgb(0, 0, 0);">Веселый скандал </strong><span style="color: rgb(0, 0, 0);">двух моих лучших друзей. - Ты не мог бы убрать игрушки в своей комнате? - Да, мам, уже собираюсь.</span></p><p><span style="color: rgb(0, 0, 0);">- Я серьезно. - Как и я.</span></p><p><span style="color: rgb(0, 0, 0);">Я только что сварил макароны.</span></p><p><span style="color: rgb(0, 0, 0);">Моя собака посмотрела на них и сказала: "Я тоже так хочу".</span></p><p><span style="color: rgb(0, 0, 0);">"Я тоже так думаю", - ответил я.</span></p><p><span style="color: rgb(0, 0, 0);">С тех пор она каждый день их ест.</span></p><p><span style="color: rgb(0, 0, 0);">У меня в комнате есть специальный ящик для ее игрушек.</span></p><p><span style="color: rgb(0, 0, 0);">Иногда в него падают мои вещи.</span></p>'
  },
  {
    _id: 'n05',
    jotterId: 'j02',
    private: false,
    updateDate: '2021-09-20',
    title: 'Непостижимая вселенная',
    content: '<h1><strong style="color: rgb(0, 0, 0);">Непостижимая вселенная </strong></h1><p><span style="color: rgb(0, 0, 0);">Есть на свете множество чудес, но самое удивительное находится по ту сторону нашей жизни.</span></p><ul><li><span style="color: rgb(0, 0, 0);">В мире существуют различные формы жизни</span></li><li><span style="color: rgb(0, 0, 0);"> и каждая из них настолько удивительна, </span></li><li><span style="color: rgb(0, 0, 0);">что мы даже представить себе их не можем.</span></li></ul><p><span style="color: rgb(0, 0, 0);">Жизнь это то, что происходит с нами, пока мы строим планы на будущее и мечтаем о чем-то несбыточном.</span></p><p><span style="color: rgb(0, 0, 0);">Люди не могут объяснить многие чудеса, которые происходят вокруг них.</span></p>'
  },
  {
    _id: 'n06',
    jotterId: 'j02',
    private: true,
    updateDate: '2021-09-21',
    title: 'Одна из заметок',
    content: '<p><strong style="color: rgb(0, 0, 0);">Одна из заметок </strong><span style="color: rgb(0, 0, 0);">на зеркале заднего вида в моем автомобиле: "Пожалуйста, пристегните ремни, мы возвращаемся".</span></p><p><span style="color: rgb(0, 0, 0);">Я вижу женщину на фотографии, которую я приклеил скотчем к лобовому стеклу.</span></p><p><span style="color: rgb(0, 0, 0);">Она улыбалась, и я знал, что это должно было помочь ей выжить.</span></p><p><span style="color: rgb(0, 0, 0);">Так и произошло. </span></p><p><span style="color: rgb(0, 0, 0);">Сейчас она все еще жива, но уже не улыбается.</span></p><p><span style="color: rgb(230, 0, 0);">(*По материалам CBS New York)</span></p><p><span style="color: rgb(0, 0, 0);">В интернете есть специальные сайты, на которых есть все для ремонта вашего компьютера.</span></p>'
  },
  {
    _id: 'n07',
    jotterId: 'j02',
    private: true,
    updateDate: '2021-09-22',
    title: 'Другая заметка',
    content: '<p><strong>Другая заметка: </strong>моя дочь, которой 6 лет, и которую я на днях отодрал за уши, ходит с моими серьгами в своем школьном портфеле.</p><p>На каждой перемене.</p><p>Задаю ей вопрос: — А почему ты носишь мои серьги? Она отвечает: — Мама сказала, чтобы я никогда про твои не забывала.</p><p>— Что она обо мне сказала? — спрашиваю. —</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>'
  },
  {
    _id: 'n08',
    jotterId: 'j03',
    private: true,
    updateDate: '2021-09-24',
    title: 'Зачетный полет',
    content: '<p><h1><strong style="color: rgb(0, 0, 0);">Зачетный полет </strong></h1><p><span style="color: rgb(0, 0, 0);">с лестницы на каблуках.</span></p><p><strong style="color: rgb(153, 51, 255);">Если бы это была не подруга, то я бы еще подумала, а так..</strong><span style="color: rgb(0, 0, 0);">.</span></p><p><span style="color: rgb(0, 0, 0);">Просто повезло, хорошо хоть без переломов.</span></p><p><span style="color: rgb(0, 0, 0);">У меня есть традиция: новый год я встречаю в платье.</span></p><p><span style="color: rgb(0, 0, 0);">И все бы ничего, но только платье это - свадебное.</span></p>'
  },
  {
    _id: 'n09',
    jotterId: 'j03',
    private: true,
    updateDate: '2021-09-26',
    title: 'Веселый скандал',
    content: '<p><strong style="color: rgb(0, 0, 0);">Веселый скандал </strong><span style="color: rgb(0, 0, 0);">двух моих лучших друзей. - Ты не мог бы убрать игрушки в своей комнате? - Да, мам, уже собираюсь.</span></p><p><span style="color: rgb(0, 0, 0);">- Я серьезно. - Как и я.</span></p><p><span style="color: rgb(0, 0, 0);">Я только что сварил макароны.</span></p><p><span style="color: rgb(0, 0, 0);">Моя собака посмотрела на них и сказала: "Я тоже так хочу".</span></p><p><span style="color: rgb(0, 0, 0);">"Я тоже так думаю", - ответил я.</span></p><p><span style="color: rgb(0, 0, 0);">С тех пор она каждый день их ест.</span></p><p><span style="color: rgb(0, 0, 0);">У меня в комнате есть специальный ящик для ее игрушек.</span></p><p><span style="color: rgb(0, 0, 0);">Иногда в него падают мои вещи.</span></p>'
  },
  {
    _id: 'n10',
    jotterId: 'j04',
    private: false,
    updateDate: '2021-09-20',
    title: 'Непостижимая вселенная',
    content: '<h1><strong style="color: rgb(0, 0, 0);">Непостижимая вселенная </strong></h1><p><span style="color: rgb(0, 0, 0);">Есть на свете множество чудес, но самое удивительное находится по ту сторону нашей жизни.</span></p><ul><li><span style="color: rgb(0, 0, 0);">В мире существуют различные формы жизни</span></li><li><span style="color: rgb(0, 0, 0);"> и каждая из них настолько удивительна, </span></li><li><span style="color: rgb(0, 0, 0);">что мы даже представить себе их не можем.</span></li></ul><p><span style="color: rgb(0, 0, 0);">Жизнь это то, что происходит с нами, пока мы строим планы на будущее и мечтаем о чем-то несбыточном.</span></p><p><span style="color: rgb(0, 0, 0);">Люди не могут объяснить многие чудеса, которые происходят вокруг них.</span></p>'
  },
  {
    _id: 'n11',
    jotterId: 'j06',
    private: false,
    updateDate: '2021-09-21',
    title: '2Одна из заметок',
    content: '<p><strong style="color: rgb(0, 0, 0);">Одна из заметок </strong><span style="color: rgb(0, 0, 0);">на зеркале заднего вида в моем автомобиле: "Пожалуйста, пристегните ремни, мы возвращаемся".</span></p><p><span style="color: rgb(0, 0, 0);">Я вижу женщину на фотографии, которую я приклеил скотчем к лобовому стеклу.</span></p><p><span style="color: rgb(0, 0, 0);">Она улыбалась, и я знал, что это должно было помочь ей выжить.</span></p><p><span style="color: rgb(0, 0, 0);">Так и произошло. </span></p><p><span style="color: rgb(0, 0, 0);">Сейчас она все еще жива, но уже не улыбается.</span></p><p><span style="color: rgb(230, 0, 0);">(*По материалам CBS New York)</span></p><p><span style="color: rgb(0, 0, 0);">В интернете есть специальные сайты, на которых есть все для ремонта вашего компьютера.</span></p>'
  },
  {
    _id: 'n12',
    jotterId: 'j06',
    private: false,
    updateDate: '2021-09-22',
    title: 'Другая заметка',
    content: '<p><strong>Другая заметка: </strong>моя дочь, которой 6 лет, и которую я на днях отодрал за уши, ходит с моими серьгами в своем школьном портфеле.</p><p>На каждой перемене.</p><p>Задаю ей вопрос: — А почему ты носишь мои серьги? Она отвечает: — Мама сказала, чтобы я никогда про твои не забывала.</p><p>— Что она обо мне сказала? — спрашиваю. —</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>'
  },
  {
    _id: 'n13',
    jotterId: 'j06',
    private: false,
    updateDate: '2021-09-24',
    title: '1Зачетный полет',
    content: '<p><h1><strong style="color: rgb(0, 0, 0);">Зачетный полет </strong></h1><p><span style="color: rgb(0, 0, 0);">с лестницы на каблуках.</span></p><p><strong style="color: rgb(153, 51, 255);">Если бы это была не подруга, то я бы еще подумала, а так..</strong><span style="color: rgb(0, 0, 0);">.</span></p><p><span style="color: rgb(0, 0, 0);">Просто повезло, хорошо хоть без переломов.</span></p><p><span style="color: rgb(0, 0, 0);">У меня есть традиция: новый год я встречаю в платье.</span></p><p><span style="color: rgb(0, 0, 0);">И все бы ничего, но только платье это - свадебное.</span></p>'
  },
  {
    _id: 'n14',
    jotterId: 'j06',
    private: true,
    updateDate: '2021-09-26',
    title: 'Веселый скандал',
    content: '<p><strong style="color: rgb(0, 0, 0);">Веселый скандал </strong><span style="color: rgb(0, 0, 0);">двух моих лучших друзей. - Ты не мог бы убрать игрушки в своей комнате? - Да, мам, уже собираюсь.</span></p><p><span style="color: rgb(0, 0, 0);">- Я серьезно. - Как и я.</span></p><p><span style="color: rgb(0, 0, 0);">Я только что сварил макароны.</span></p><p><span style="color: rgb(0, 0, 0);">Моя собака посмотрела на них и сказала: "Я тоже так хочу".</span></p><p><span style="color: rgb(0, 0, 0);">"Я тоже так думаю", - ответил я.</span></p><p><span style="color: rgb(0, 0, 0);">С тех пор она каждый день их ест.</span></p><p><span style="color: rgb(0, 0, 0);">У меня в комнате есть специальный ящик для ее игрушек.</span></p><p><span style="color: rgb(0, 0, 0);">Иногда в него падают мои вещи.</span></p>'
  },
  {
    _id: 'n15',
    jotterId: 'j06',
    private: true,
    updateDate: '2021-09-20',
    title: 'Непостижимая вселенная',
    content: '<h1><strong style="color: rgb(0, 0, 0);">Непостижимая вселенная </strong></h1><p><span style="color: rgb(0, 0, 0);">Есть на свете множество чудес, но самое удивительное находится по ту сторону нашей жизни.</span></p><ul><li><span style="color: rgb(0, 0, 0);">В мире существуют различные формы жизни</span></li><li><span style="color: rgb(0, 0, 0);"> и каждая из них настолько удивительна, </span></li><li><span style="color: rgb(0, 0, 0);">что мы даже представить себе их не можем.</span></li></ul><p><span style="color: rgb(0, 0, 0);">Жизнь это то, что происходит с нами, пока мы строим планы на будущее и мечтаем о чем-то несбыточном.</span></p><p><span style="color: rgb(0, 0, 0);">Люди не могут объяснить многие чудеса, которые происходят вокруг них.</span></p>'
  }
]

const fetchAllPublic = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(
      notes.filter(note => note.private === false)
           .map(note => {
             const jotter = API.jotters.jotters.find(jotter => jotter._id === note.jotterId)
             const user = API.users.users.find(user => user._id === jotter.userId)
             return {
               _id: note._id,
               title: note.title,
               user: user.name,
               updateDate: typeof note.updateDate === 'string' ? Date.parse(note.updateDate) : note.updateDate,
               summary: convertToPlain(note.content).slice(0, 130) + '...'
             }
           })
    ), 1000)
  })

const fetchAllByJotterId = (jotterId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(
      notes.filter(note => note.jotterId === jotterId)
           .map(note => {
             return {
               _id: note._id,
               jotterId: note.jotterId,
               private: note.private,
               updateDate: note.updateDate,
               title: note.title,
               summary: convertToPlain(note.content).slice(0, 130) + '...'
             }
           })
    ), 1000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(notes.find(note => note._id === id)), 500)
  })

const addNewNote = (newNote) =>
  new Promise((resolve) => {
    setTimeout(() => {
      notes.push(newNote)
      resolve(newNote)
    }, 500)
  })

const usersAPI = {
  fetchAllPublic,
  fetchAllByJotterId,
  getById,
  addNewNote
}

export default usersAPI
