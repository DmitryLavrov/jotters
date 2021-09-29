const jotters = [
  {
    _id: '01',
    title: 'Мой первый блокнот',
    access: 'private',
    lastChanges: '21.09.2021',
    notes: [
      {
        _id: '0101',
        title: 'Одна из заметок',
        content: '<p><strong style="color: rgb(0, 0, 0);">Одна из заметок </strong><span style="color: rgb(0, 0, 0);">на зеркале заднего вида в моем автомобиле: "Пожалуйста, пристегните ремни, мы возвращаемся".</span></p><p><span style="color: rgb(0, 0, 0);">Я вижу женщину на фотографии, которую я приклеил скотчем к лобовому стеклу.</span></p><p><span style="color: rgb(0, 0, 0);">Она улыбалась, и я знал, что это должно было помочь ей выжить.</span></p><p><span style="color: rgb(0, 0, 0);">Так и произошло. </span></p><p><span style="color: rgb(0, 0, 0);">Сейчас она все еще жива, но уже не улыбается.</span></p><p><span style="color: rgb(230, 0, 0);">(*По материалам CBS New York)</span></p><p><span style="color: rgb(0, 0, 0);">В интернете есть специальные сайты, на которых есть все для ремонта вашего компьютера.</span></p>'
      },
      {
        _id: '0102',
        title: 'Другая заметка',
        content: '<p><strong>Другая заметка: </strong>моя дочь, которой 6 лет, и которую я на днях отодрал за уши, ходит с моими серьгами в своем школьном портфеле.</p><p>На каждой перемене.</p><p>Задаю ей вопрос: — А почему ты носишь мои серьги? Она отвечает: — Мама сказала, чтобы я никогда про твои не забывала.</p><p>— Что она обо мне сказала? — спрашиваю. —</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>'
      }
    ]
  },
  {
    _id: '02',
    title: 'Мой следующий блокнот',
    access: 'public',
    lastChanges: '23.09.2021',
    notes: [
      {
        _id: '0201',
        title: 'Зачетный полет',
        content: '<p><h1><strong style="color: rgb(0, 0, 0);">Зачетный полет </strong></h1><p><span style="color: rgb(0, 0, 0);">с лестницы на каблуках.</span></p><p><strong style="color: rgb(153, 51, 255);">Если бы это была не подруга, то я бы еще подумала, а так..</strong><span style="color: rgb(0, 0, 0);">.</span></p><p><span style="color: rgb(0, 0, 0);">Просто повезло, хорошо хоть без переломов.</span></p><p><span style="color: rgb(0, 0, 0);">У меня есть традиция: новый год я встречаю в платье.</span></p><p><span style="color: rgb(0, 0, 0);">И все бы ничего, но только платье это - свадебное.</span></p>'
      },
      {
        _id: '0202',
        title: 'Веселый скандал',
        content: '<p><strong style="color: rgb(0, 0, 0);">Веселый скандал </strong><span style="color: rgb(0, 0, 0);">двух моих лучших друзей. - Ты не мог бы убрать игрушки в своей комнате? - Да, мам, уже собираюсь.</span></p><p><span style="color: rgb(0, 0, 0);">- Я серьезно. - Как и я.</span></p><p><span style="color: rgb(0, 0, 0);">Я только что сварил макароны.</span></p><p><span style="color: rgb(0, 0, 0);">Моя собака посмотрела на них и сказала: "Я тоже так хочу".</span></p><p><span style="color: rgb(0, 0, 0);">"Я тоже так думаю", - ответил я.</span></p><p><span style="color: rgb(0, 0, 0);">С тех пор она каждый день их ест.</span></p><p><span style="color: rgb(0, 0, 0);">У меня в комнате есть специальный ящик для ее игрушек.</span></p><p><span style="color: rgb(0, 0, 0);">Иногда в него падают мои вещи.</span></p>'
      },
      {
        _id: '0203',
        title: 'Непостижимая вселенная',
        content: '<h1><strong style="color: rgb(0, 0, 0);">Непостижимая вселенная </strong></h1><p><span style="color: rgb(0, 0, 0);">Есть на свете множество чудес, но самое удивительное находится по ту сторону нашей жизни.</span></p><ul><li><span style="color: rgb(0, 0, 0);">В мире существуют различные формы жизни</span></li><li><span style="color: rgb(0, 0, 0);"> и каждая из них настолько удивительна, </span></li><li><span style="color: rgb(0, 0, 0);">что мы даже представить себе их не можем.</span></li></ul><p><span style="color: rgb(0, 0, 0);">Жизнь это то, что происходит с нами, пока мы строим планы на будущее и мечтаем о чем-то несбыточном.</span></p><p><span style="color: rgb(0, 0, 0);">Люди не могут объяснить многие чудеса, которые происходят вокруг них.</span></p>'
      }
    ]
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(jotters)
    }, 2000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(jotters.find(jotter => jotter._id === id)), 1000)
  })

const jottersAPI = {
  fetchAll,
  getById
}

export default jottersAPI

// export default {
//   fetchAll,
//   getById
// }
