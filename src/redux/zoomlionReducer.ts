import imgCat1 from '../assets/img/zoomlion/categoriesPhoto/1.webp'
import imgCat2 from '../assets/img/zoomlion/categoriesPhoto/2.webp'
import imgCat3 from '../assets/img/zoomlion/categoriesPhoto/3.webp'
import imgCat4 from '../assets/img/zoomlion/categoriesPhoto/4.webp'
import imgCat5 from '../assets/img/zoomlion/categoriesPhoto/5.webp'
import imgCat6 from '../assets/img/zoomlion/categoriesPhoto/6.webp'
import imgCat7 from '../assets/img/zoomlion/categoriesPhoto/7.webp'


//ГУСЕНИЧНЫЕ КРАНЫ
import imgGus1 from '../assets/img/zoomlion/prodPhoto/gusCrany/1.webp'
import imgGus2 from '../assets/img/zoomlion/prodPhoto/gusCrany/2.webp'

//БАШЕННЫЕ КРАНЫ
import imgBash1 from '../assets/img/zoomlion/prodPhoto/bashCrany/1.webp'
import imgBash2 from '../assets/img/zoomlion/prodPhoto/bashCrany/2.webp'

//АВТОКРАНЫ
import imgAuto1 from '../assets/img/zoomlion/prodPhoto/autoCrany/1.webp'
import imgAuto2 from '../assets/img/zoomlion/prodPhoto/autoCrany/2.webp'

//КОРОТКОБАЗНЫЕ КРАНЫ
import imgKor1 from '../assets/img/zoomlion/prodPhoto/korotkoBazCrany/1.webp'
import imgKor2 from '../assets/img/zoomlion/prodPhoto/korotkoBazCrany/2.webp'

//САМОХОДНЫЕ НОЖНИЧНЫЕ ПОДЪЕМНИКИ
import imgSNP1 from '../assets/img/zoomlion/prodPhoto/samNozhPodemniki/1.webp'
import imgSNP2 from '../assets/img/zoomlion/prodPhoto/samNozhPodemniki/2.webp'

//САМОХОДНЫЕ КОЛЕНЧАТЫЕ ПОДЪЕМНИКИ
import imgSKP1 from '../assets/img/zoomlion/prodPhoto/samKolPodemniki/1.webp'
import imgSKP2 from '../assets/img/zoomlion/prodPhoto/samKolPodemniki/2.webp'

//ТЕЛЕСКОПИЧЕСКИЕ ПОДЪЕМНИКИ САМОХОДНЫЕ
import imgTP1 from '../assets/img/zoomlion/prodPhoto/telPodemniki/1.webp'
import imgTP2 from '../assets/img/zoomlion/prodPhoto/telPodemniki/2.webp'

type ZoomlionItemType = {
    itemUrl: string,
    name: string,
    chars: Array<{ [key: string]: string }>,
    img: string
}

type ZoomlionCategoryType = {
    categoryUrl: string,
    name: string,
    character: string,
    characterValue: string,
    photo: string,
    items: [] | Array<ZoomlionItemType>
}


const initialState = {
    zoomlionCategories: [
        {
            categoryUrl: 'gushenicnye-krany',
            name: 'Гусеничные краны',
            character: 'Грузоподъемность',
            characterValue: 'от 55 до 2000 тонн',
            photo: imgCat1,
            items: [
                {
                    itemUrl: 'ZCC550V',
                    name: 'Гусеничный кран ZCC550V',
                    chars: [
                        { 'Грузоподъемность': '55 т' },
                        { 'Основная стрела': '13~52 м' },
                        { 'Фиксированный гусёк': '7~15 м' },
                        { 'Противовес': '16,8 т' },
                        { 'Крюковые подвески (Q ном., т)': '60, 40, 20, 8 т' },
                        { 'Скорость лебёдки вспомогательного подъёма (H2)': '0-145 м/мин' },
                    ],
                    img: imgGus1
                },
                {
                    itemUrl: 'ZCC750V',
                    name: 'Гусеничный кран ZCC750V',
                    chars: [
                        { 'Грузоподъемность': '75 т' },
                        { 'Основная стрела': '13~58 м' },
                        { 'Фиксированный гусёк': '7~19 м' },
                        { 'Противовес': '23,7 т' },
                        { 'Давление на грунт': '0,076 МПа' },
                        { 'Максимальные размеры одного элемента крана для перевозки': '13000 x 3200 x 3340 мм' },
                    ],
                    img: imgGus2
                }
            ]
        },
        {
            categoryUrl: 'bashennye-krany',
            name: 'Башенные краны',
            character: 'Грузоподъемность',
            characterValue: 'от 5 до 240 тонн',
            photo: imgCat2,
            items: [
                {
                    itemUrl: 'D5200-240',
                    name: 'Башенный кран D5200-240',
                    chars: [
                        { 'Грузоподъёмность': '240 т' },
                        { 'Максимальный вылет стрелы': '50 м' },
                        { 'Г/п при максимальном вылете': '89 м' },
                        { 'Секции башни': '6,5 м x 6,5 м x 5,7 м' },
                        { 'Высота свободностоящего крана': '90,2 м' },
                        { 'Максимальная высота подъёма': '208,1 м' },
                    ],
                    img: imgBash1
                },
                {
                    itemUrl: 'WA6013-6A',
                    name: ' Башенный кран WA6013-6A',
                    chars: [
                        { 'Грузоподъёмность': '6 т' },
                        { 'Максимальный вылет стрелы': '60 м' },
                        { 'Г/п при максимальном вылете': '1,3 т' },
                        { 'Секции башни': '1,6 м x 1,6 м x 2,5 м' },
                        { 'Высота свободностоящего крана': '41,1 м' },
                        { 'Максимальная высота подъёма': '198,6 м' },
                    ],
                    img: imgBash2
                },
            ]
        },

        {
            categoryUrl: 'autokrany',
            name: 'Автокраны',
            character: 'Грузоподъемность',
            characterValue: 'от 25 до 2000 тонн',
            photo: imgCat3,
            items: [
                {
                    itemUrl: 'ZTC250V',
                    name: 'Автокран 25 тонн ZTC250V',
                    chars: [
                        { 'Грузоподъёмность': '25 т' },
                        { 'Длина стрелы': '42 м' },
                        { 'Высота подъёма без гуська': '42,1 м' },
                        { 'Высота подъёма с гуськом': '50 м' },
                        { 'Время подъёма стрелы': '34 с' },
                        { 'Скорость выдвижения секций стрелы': '75 с' },
                    ],
                    img: imgAuto1
                },
                {
                    itemUrl: 'ZTC300V',
                    name: 'Автокран 30 тонн ZTC300V',
                    chars: [
                        { 'Грузоподъёмность': '30 т' },
                        { 'Длина стрелы': '42 м' },
                        { 'Высота подъёма без гуська': '42,1 м' },
                        { 'Высота подъёма с гуськом': '50 м' },
                        { 'Время подъёма стрелы': '35 с' },
                        { 'Скорость выдвижения секций стрелы': '80 с' },
                    ],
                    img: imgAuto2
                },
            ]
        },
        {
            categoryUrl: 'korotkobaznye-krany',
            name: 'Короткобазные краны',
            character: 'Грузоподъёмность',
            characterValue: 'от 40 до 110 метров',
            photo: imgCat4,
            items: [
                {
                    itemUrl: 'ZRT400',
                    name: 'Короткобазный кран ZRT400',
                    chars: [
                        { 'Грузоподъёмность': '40 т' },
                        { 'Высота подъёма без гуська': '33,9 м' },
                        { 'Высота подъёма с гуськом': '47,8 м' },
                        { 'Время подъёма стрелы': '45 с' },
                        { 'Время выдвижения (телескопирования) стрелы': '50 с' },
                        { 'Частота вращения поворотной платформы': '0~2,5 об/мин' },
                    ],
                    img: imgKor1
                },
                {
                    itemUrl: 'ZRT410',
                    name: 'Короткобазный кран ZRT410',
                    chars: [
                        { 'Грузоподъёмность': '60 т' },
                        { 'Высота подъёма без гуська': '45,1 м' },
                        { 'Высота подъёма с гуськом': '61,2 м' },
                        { 'Время подъёма стрелы': '45 с' },
                        { 'Время выдвижения (телескопирования) стрелы': '110 с' },
                        { 'Частота вращения поворотной платформы': '0~2,4 об/мин' },
                    ],
                    img: imgKor2
                },
            ]
        },

        {
            categoryUrl: 'samohodnye-nozhnichye-podemniki',
            name: 'Самоходные ножничные подъемники',
            character: 'Грузоподъёмность',
            characterValue: 'от 230 до 380 метров',
            photo: imgCat5,
            items: [
                {
                    itemUrl: 'ZS0607HD',
                    name: 'Ножничный подъемник ZS0607HD',
                    chars: [
                        { 'Грузоподъёмность': '230 т' },
                        { 'Рабочая высота': '7,87 м' },
                        { 'Высота платформы': '5,87 м' },
                        { 'Минимальная высота подъёма платформы': '1,05 м' },
                        { 'Длина платформы': '1,65 м' },
                        { 'Ширина платформы': '0,74 м' },
                    ],
                    img: imgSNP1
                },
                {
                    itemUrl: 'ZS0608HD',
                    name: 'Ножничный подъемник ZS0608HD',
                    chars: [
                        { 'Грузоподъёмность': '380 т' },
                        { 'Рабочая высота': '8 м' },
                        { 'Высота платформы': '6 м' },
                        { 'Минимальная высота подъёма платформы': '1,07 м' },
                        { 'Длина платформы': '2,3 м' },
                        { 'Ширина платформы': '0,81 м' },
                    ],
                    img: imgSNP2
                },
            ]
        },

        {
            categoryUrl: 'samohodnye-kolenchatye-podemniki',
            name: 'Самоходные коленчаные подъемники',
            character: 'Грузоподъёмность',
            characterValue: 'от 230 до 300 метров',
            photo: imgCat6,
            items: [
                {
                    itemUrl: 'ZA14JE',
                    name: 'Коленчатый подъемник ZA14JE',
                    chars: [
                        { 'Грузоподъёмность': '230 т' },
                        { 'Рабочая высота': '16 м' },
                        { 'Высота платформы': '14 м' },
                        { 'Максимальный рабочий радиус': '7,5 м' },
                        { 'Величина вертикального подъёма (опускания)': '7,74 м' },
                        { 'Скорость передвижения (сложенного)': '6,1 км/ч' },
                    ],
                    img: imgSKP1
                },
                {
                    itemUrl: 'ZA20J',
                    name: 'Коленчатый подъемник ZA20J',
                    chars: [
                        { 'Грузоподъёмность': '250 т' },
                        { 'Рабочая высота': '21,38 м' },
                        { 'Высота платформы': '19,38 м' },
                        { 'Максимальный рабочий радиус': '12,3 м' },
                        { 'Величина вертикального подъёма (опускания)': '8,25 м' },
                        { 'Скорость передвижения (сложенного)': '6,1 км/ч' },
                    ],
                    img: imgSKP2
                },
            ]
        },
        {
            categoryUrl: 'teleskopicheskye-podemniki-samohodnye',
            name: 'Телескопические подъемники самоходные',
            character: 'Грузоподъёмность',
            characterValue: '300 метров',
            photo: imgCat7,
            items: [
                {
                    itemUrl: 'ZA20J_',
                    name: 'Телескопический подъемник ZT20J',
                    chars: [
                        { 'Грузоподъёмность': '300 кг / 454 кг' },
                        { 'Рабочая высота': '22,75 м' },
                        { 'Высота платформы': '20,75 м' },
                        { 'Максимальная рабочая высота': '22,75 м' },
                        { 'Максимальная высота подъёма платформы': '20,75 м' },
                        { 'Максимальный рабочий радиус': '17,4 м' },
                    ],
                    img: imgTP1
                },
                {
                    itemUrl: 'ZT26J',
                    name: 'Телескопический подъемник ZT26J',
                    chars: [
                        { 'Грузоподъёмность': '300 кг / 454 кг' },
                        { 'Рабочая высота': '28,2 м м' },
                        { 'Высота платформы': '26,2 м' },
                        { 'Максимальная рабочая высота': '28,2 м' },
                        { 'Максимальная высота подъёма платформы': '26,2 м' },
                        { 'Максимальный рабочий радиус': '23,31 м' },
                    ],
                    img: imgTP2
                },
            ]
        },

    ] as Array<ZoomlionCategoryType>
}

type InitialZoomlionStateType = typeof initialState

const zoomlionReducer = function (state: InitialZoomlionStateType = initialState, action: AllACZoomLionTypes): InitialZoomlionStateType {
    let stateCopy: InitialZoomlionStateType

    switch (action.type) {
        default: return state
    }
}

type ZoomlionReducerType = typeof zoomlionReducer


type GetActionWInferType<T> = T extends { [key: string]: infer U } ? U : never

type AllACZoomLionTypes = ReturnType<GetActionWInferType<typeof ZoomlionReducerActionCreators>>

const ZoomlionReducerActionCreators = {
    fakeAC: () => ({ type: 'zoomlionData/FAKE_AC' } as const),
}

export { zoomlionReducer }
export type { ZoomlionReducerType, ZoomlionItemType, InitialZoomlionStateType }
