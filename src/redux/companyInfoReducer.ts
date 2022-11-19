import logo from '../assets/img/logo.webp'
import banner1 from '../assets/img/banner/1.webp'
import banner2 from '../assets/img/banner/2.webp'
import banner3 from '../assets/img/banner/3.webp'
import banner4 from '../assets/img/banner/4.webp'
import banner5 from '../assets/img/banner/5.webp'



const initialState = {
    label: 'ООО «Стройленд»' as string,
    phone: '8 (917) 747-70-47' as string,
    email: 'akulovds@stroylend.com' as string,
    slogan: 'Авторизированный дилер по продаже спецтехники компаний Zoomlion, JAC' as string,
    address: 'Россия, Республика Башкортостан, Уфа, улица Зои Космодемьянской, 113' as string,
    schedule: 'Пн. – пт.: 9:00–18:00' as string,
    aboutUsParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt diam massa, at dapibus dolor imperdiet id. Cras in aliquet neque. Duis venenatis tristique neque at efficitur. Aliquam eu dignissim elit. Donec et sapien hendrerit, tristique metus in, mollis nulla. Curabitur sagittis eu turpis eget ornare. Donec tempus vulputate consectetur. Aliquam erat volutpat. Ut et diam eu lacus efficitur imperdiet. Vivamus tristique in felis vitae mollis. Integer varius tempus sem sed sodales. Vivamus tincidunt odio eget ullamcorper facilisis. Vivamus posuere dolor neque, eget rhoncus ipsum facilisis.',
        'Nunc consequat felis ut lorem cursus, sed sagittis neque egestas. Aliquam finibus orci non fermentum dignissim. Nunc magna ipsum, vestibulum eget risus sit amet, lobortis interdum dolor. Ut ut hendrerit mi, at volutpat tellus. Sed pharetra, eros nec varius ullamcorper, quam felis porta urna, eu sagittis nisl elit vel risus. Integer sollicitudin ac enim a hendrerit. Donec at ipsum ut magna mattis sagittis. In dignissim felis leo, ut hendrerit elit ornare ac. Suspendisse nec ullamcorper odio, ut elementum elit.',
        'Nullam pulvinar risus ac tristique ullamcorper. Duis id elementum purus. Donec tincidunt justo in lobortis fermentum. Vestibulum commodo cursus erat, id rutrum ligula vestibulum nec. Integer auctor dolor libero, vitae tincidunt massa iaculis ut. Aliquam facilisis non felis a interdum. Aliquam sit amet pulvinar sapien. Suspendisse cursus magna et dui pulvinar rhoncus. Phasellus at quam sit amet erat scelerisque tincidunt. Praesent nisi ligula, efficitur blandit dui id, commodo gravida nisi. Aenean quis lectus maximus, dictum est a, efficitur nisi. Nullam a libero ac metus semper faucibus. Cras hendrerit quam eget diam porttitor, et egestas urna ullamcorper.'
    ] as Array<string>,
    bannerImages: [banner1, banner2, banner3, banner4, banner5,] as Array<string>,
    logoImg: logo as string,
    copyright: '© ООО «Стройленд» - 2022' as string,
    userAgreePargraphs: [
        'Nam cursus nisi at odio tempus, sit amet sagittis enim faucibus. Donec mattis urna a dapibus lobortis. Mauris quis risus a neque porta commodo. Nunc imperdiet condimentum orci, et aliquam augue sagittis sit amet. Cras suscipit orci lectus, vel mollis nisl cursus quis. Aliquam erat volutpat. Sed fringilla vitae leo nec laoreet. Nunc eu sollicitudin risus. Integer condimentum nibh libero, ut egestas libero interdum at. Vivamus libero est, lacinia eu dictum quis, cursus ac ex. Morbi in urna sed lectus placerat molestie ut et leo.',
        'Maecenas facilisis eros non nunc condimentum posuere. Fusce posuere ligula sit amet feugiat lobortis. Mauris vel ullamcorper nulla. Praesent consequat magna vel fringilla mollis. Sed vehicula libero ac tortor tincidunt sollicitudin. Donec consectetur hendrerit leo eu varius. Fusce ac tortor vehicula, rhoncus nibh aliquam, cursus massa. Ut a ultricies lectus, sit amet elementum orci. In sed elit at justo varius imperdiet sit amet at diam. Donec semper at arcu in feugiat. Quisque pharetra volutpat risus, in posuere augue imperdiet a. Duis magna nisl, faucibus vitae massa vel, scelerisque sollicitudin arcu. Morbi quam erat, consequat sit amet dolor vitae, mollis sagittis ligula. Sed quis tempus quam. Fusce at consectetur dui, ut finibus sapien. Vestibulum in tortor vitae nunc congue vulputate vel eu metus.',
        'Donec viverra et sem nec feugiat. Ut eget vehicula nunc. Morbi vestibulum consequat lectus, quis ultricies mauris aliquam non. Aenean pulvinar tristique pretium. Mauris hendrerit nec arcu in pharetra. Aenean pellentesque tellus sit amet dui interdum, in dapibus lorem ullamcorper. Duis et viverra lectus. Aenean malesuada nisl arcu, sed tristique felis rhoncus eget. Integer bibendum enim vel lacus tempor consectetur. Curabitur eros nisl, euismod et justo vitae, tempor porttitor est. Duis congue congue metus sed porta. Duis vel arcu vulputate mi euismod varius non ac nisi. Phasellus orci lectus, tempor vel sagittis vitae, accumsan sed mauris. Nulla porttitor sed nisi eget ultrices. Integer et augue nulla. Donec ac malesuada velit.'
    ] as Array<string>
}

type InitialCompanyInfoStateType = typeof initialState

const CompanyInfoReducer = function (state: InitialCompanyInfoStateType = initialState, action: AllACCompanyInfoTypes): InitialCompanyInfoStateType {
    let stateCopy: InitialCompanyInfoStateType

    switch (action.type) {
        default: return state
    }
}

type CompanyInfoReducerType = typeof CompanyInfoReducer

type GetActionWInferType<T> = T extends { [key: string]: infer U } ? U : never

type AllACCompanyInfoTypes = ReturnType<GetActionWInferType<typeof ContactsReducerActionCreators>>

const ContactsReducerActionCreators = {
    fakeAC: () => ({ type: 'JACData/FAKE_AC' } as const),
}

export { CompanyInfoReducer }
export type { CompanyInfoReducerType }
export type { InitialCompanyInfoStateType }