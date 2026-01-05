import { ERouteTable } from '../route';

export const challengeCategories = [
  {
    id: 'cau-hoi-vui',
    name: 'Câu hỏi vui lịch sử',
    active: false,
    route: ERouteTable.CHALLENGE_QUIZ,
  },
  {
    route: ERouteTable.CHALLENGE_TIMELINE,
    id: 'sap-xep',
    name: 'Sắp xếp dòng thời gian',
    active: false,
  },
  {
    route: ERouteTable.CHALLENGE_PUZZLE,
    id: 'ghep-hinh',
    name: 'Ghép hình anh hùng',
    active: false,
  },
  {
    route: ERouteTable.CHALLENGE_FILL_STORY,
    id: 'dien-khuyet',
    name: 'Điền khuyết câu chuyện',
    active: false,
  },
];
