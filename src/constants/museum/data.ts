import { InfoData } from '../../components/3d-viewer/ModalInfo';

export type Slide = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  modelUrl: string;
  thumbnail: string;
  info: InfoData;
};

export const SLIDES: Slide[] = [
  {
    id: 'main',
    title: 'Thạp đồng Đào Thịnh',
    tags: [
      'Hiện vật khảo cổ',
      'Văn hóa Đông Sơn',
      'Bảo vật quốc gia của Việt Nam',
    ],
    description:
      'Thạp đồng Đào Thịnh là một hiện vật bằng đồng thuộc nền văn hóa Đông Sơn...',
    modelUrl:
      'https://hnuk7eypl4i5hssg.public.blob.vercel-storage.com/thapdong%5B1%5D.glb',
    thumbnail: '/images/museum/thapdong.png',
    info: {
      title: 'Thạp đồng Đào Thịnh',
      sections: [
        {
          heading: 'Phát hiện',
          body: [
            'Ngày 14 tháng 9 năm 1961, ông Phạm Văn Phúc, một bộ đội phục viên ở xã Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái khi đang đi câu đã phát hiện một vật như cái chum nằm sâu trong lòng đất khoảng 3 mét khi bờ sông Hồng bị sạt lở. Trong thạp lúc đó có chứa một thạp đồng nhỏ hơn không có nắp, quai hình mui thuyền còn khá nguyên vẹn, cao 21 cm, đường kính miệng 18,8 cm, đường kính đáy 14,7 cm, một mảnh gỗ mục đậy lên trên, bên cạnh còn có thêm một số cục xỉ đồng và một số vật màu đen không rõ hình dạng. Sau đó một số người dân trong xã kéo ra bờ sông đập phá nửa thân trên thạp, người lấy cục đồng, đinh đồng, người bẻ hình người gắn trên nắp thạp.[5]',
            'Hai ngày sau, ngày 16 tháng 9, Ủy ban hành chính xã... giao cho Bảo tàng Lịch sử Việt Nam.',
          ],
        },
        {
          heading: 'Hiện trạng',
          body: [
            'Khi thu nhận, chiếc thạp bị vỡ thành nhiều mảnh...',
            'Bảo tàng Lịch sử Quốc gia đã phục dựng để trưng bày.',
          ],
        },
        {
          heading: 'Mô tả',
          body: ['Thạp có đường kính miệng 61 cm, đáy 60 cm và cao 98 cm...'],
        },
      ],
    },
  },
  {
    id: 'lid',
    title: 'Nắp thạp',
    tags: ['Chi tiết', 'Trang trí'],
    description: 'Phần nắp có tạo hình... (mô tả).',
    modelUrl:
      'https://hnuk7eypl4i5hssg.public.blob.vercel-storage.com/binhgom%5B1%5D.glb',
    thumbnail: '/images/museum/khuyentai.png',
    info: {
      title: 'Nắp thạp',
      sections: [
        { heading: 'Tổng quan', body: ['Nắp thạp với hoa văn hình học...'] },
      ],
    },
  },
  {
    id: 'handle',
    title: 'Tay cầm',
    tags: ['Chi tiết', 'Kỹ thuật đúc'],
    description: 'Tay cầm thể hiện kỹ thuật đúc đồng tinh xảo... (mô tả).',
    modelUrl:
      'https://hnuk7eypl4i5hssg.public.blob.vercel-storage.com/binhgom%5B1%5D.glb',
    thumbnail: '/images/museum/tramcai.png',
    info: {
      title: 'Tay cầm',
      sections: [
        { heading: 'Kỹ thuật', body: ['Đúc liền khối, xử lý bề mặt...'] },
      ],
    },
  },
];
