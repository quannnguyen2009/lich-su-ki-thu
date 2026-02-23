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
      'Thạp đồng Đào Thịnh là một hiện vật bằng đồng tiêu biểu của văn hóa Đông Sơn, có niên đại khoảng thế kỷ III–II trước Công nguyên. Hiện vật nổi tiếng bởi kích thước lớn, kỹ thuật đúc tinh xảo và đặc biệt là các tượng người ở tư thế giao phối gắn trên nắp, phản ánh tín ngưỡng phồn thực của cư dân Đông Sơn cổ.',
    modelUrl:
      'https://hnuk7eypl4i5hssg.public.blob.vercel-storage.com/thapdong%5B1%5D.glb',
    thumbnail: '/images/museum/thapdong.png',
    info: {
      title: 'Thạp đồng Đào Thịnh',
      sections: [
        {
          heading: 'Phát hiện',
          body: [
            'Ngày 14 tháng 9 năm 1961, ông Phạm Văn Phúc, một bộ đội phục viên ở xã Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, trong lúc đi câu cá đã phát hiện một vật giống như chiếc chum nằm sâu khoảng 3 mét dưới lòng đất tại bờ sông Hồng bị sạt lở. Bên trong thạp lớn có một thạp đồng nhỏ hơn không có nắp, quai hình mui thuyền còn khá nguyên vẹn, cao 21 cm, đường kính miệng 18,8 cm, đường kính đáy 14,7 cm.',
            'Sau khi phát hiện, do chưa nhận thức được giá trị hiện vật, một số người dân đã đập phá phần thân trên của thạp để lấy đồng. Ngày 16 tháng 9 năm 1961, chính quyền địa phương đã kịp thời can thiệp và bàn giao các mảnh vỡ còn lại cho Bảo tàng Lịch sử Việt Nam.'
          ],
        },
        {
          heading: 'Hiện trạng',
          body: [
            'Khi được tiếp nhận, thạp đồng đã bị vỡ thành nhiều mảnh lớn nhỏ, phần nắp và thân bị hư hại nặng. Các tượng người trên nắp thạp cũng không còn nguyên vẹn.',
            'Sau quá trình nghiên cứu, bảo quản và phục dựng công phu, Bảo tàng Lịch sử Quốc gia đã khôi phục hình dáng cơ bản của thạp để trưng bày và phục vụ nghiên cứu.'
          ],
        },
        {
          heading: 'Mô tả',
          body: [
            'Thạp đồng Đào Thịnh có đường kính miệng khoảng 61 cm, đường kính đáy 60 cm và chiều cao 98 cm. Thân thạp hình trụ, đáy phẳng, được đúc liền khối với kỹ thuật cao.',
            'Trang trí chủ yếu là các hoa văn hình học, văn thừng và đặc biệt là bốn cặp tượng nam nữ trong tư thế giao phối gắn trên nắp, được xem là biểu tượng tiêu biểu cho tín ngưỡng phồn thực và quan niệm sinh sôi, nảy nở của cư dân Đông Sơn.'
          ],
        },
      ],
    },
  },
  {
    id: 'pottery',
    title: 'Bình gốm cổ thời Hùng Vương',
    tags: [
      'Hiện vật khảo cổ',
      'Gốm cổ',
      'Thời đại Hùng Vương',
    ],
    description:
      'Nhóm bình gốm cổ có niên đại thời Hùng Vương, thuộc giai đoạn tiền – sơ sử Việt Nam. Hiện vật phản ánh kỹ thuật chế tác gốm thủ công, hình dáng đa dạng và vai trò quan trọng của đồ gốm trong sinh hoạt cũng như nghi lễ của cư dân Văn Lang.',
    modelUrl:
      'https://hnuk7eypl4i5hssg.public.blob.vercel-storage.com/binhgom%5B1%5D.glb',
    thumbnail: '/images/museum/binhgom.png',
    info: {
      title: 'Bình gốm cổ thời Hùng Vương',
      sections: [
        {
          heading: 'Niên đại và bối cảnh',
          body: [
            'Các bình gốm có niên đại khoảng thiên niên kỷ I trước Công nguyên, gắn với thời đại Hùng Vương – Văn Lang.',
            'Đây là giai đoạn cư dân Việt cổ đã định cư ổn định, phát triển nông nghiệp lúa nước và các nghề thủ công, trong đó có nghề làm gốm.'
          ],
        },
        {
          heading: 'Hình dáng và kỹ thuật',
          body: [
            'Bình gốm được tạo hình thủ công, chủ yếu bằng phương pháp nặn tay kết hợp bàn xoay thô sơ.',
            'Hình dáng đa dạng: thân phình, miệng loe, cổ thắt hoặc chân đế thấp, thể hiện sự linh hoạt trong công năng sử dụng.'
          ],
        },
        {
          heading: 'Trang trí',
          body: [
            'Bề mặt gốm ít trang trí, chủ yếu là các hoa văn khắc vạch, văn thừng hoặc để trơn.',
            'Màu sắc phổ biến là nâu đỏ, nâu sẫm do quá trình nung trong điều kiện nhiệt độ chưa ổn định.'
          ],
        },
        {
          heading: 'Công dụng',
          body: [
            'Bình gốm được sử dụng trong sinh hoạt hàng ngày như đựng nước, lương thực, thực phẩm.',
            'Một số hiện vật còn mang ý nghĩa nghi lễ hoặc được chôn theo trong mộ táng, phản ánh quan niệm tâm linh của cư dân thời Hùng Vương.'
          ],
        },
      ],
    },
  },
  {
    id: 'amulet',
    title: 'Bùa cổ',
    tags: ['Tín ngưỡng', 'Thời đại Hùng Vương'],
    description:
      'Bùa cổ thời đại Hùng Vương phản ánh tín ngưỡng nguyên thủy và quan niệm tâm linh của cư dân Văn Lang. Hiện vật thường gắn với niềm tin bảo hộ, cầu may và kết nối con người với thần linh, thiên nhiên.',
    modelUrl:
      'https://chyyuuwyznqgw0ru.public.blob.vercel-storage.com/BUA_ALL.glb',
    thumbnail: '/images/museum/buahungvuong.png',
    info: {
      title: 'Bùa cổ thời Hùng Vương',
      sections: [
        {
          heading: 'Chất liệu và chế tác',
          body: [
            'Chế tác từ đá, đồng hoặc đất nung, tạo hình thủ công.',
            'Hoa văn đơn giản, mang tính biểu tượng hơn là trang trí.'
          ],
        },
        {
          heading: 'Ý nghĩa tín ngưỡng',
          body: [
            'Được xem như vật bảo hộ cá nhân hoặc vật linh thiêng trong nghi lễ.',
            'Phản ánh tư duy vạn vật hữu linh và tín ngưỡng phồn thực sơ khai.'
          ],
        },
      ],
    },
  },
  {
    id: 'axe',
    title: 'Rìu đồng thời Đông Sơn',
    tags: [
      'Hiện vật khảo cổ',
      'Công cụ lao động',
      'Văn hóa Đông Sơn',
    ],
    description:
      'Rìu đồng thời Đông Sơn là hiện vật tiêu biểu cho trình độ luyện kim phát triển cao của cư dân Việt cổ. Hiện vật vừa mang chức năng công cụ lao động, vừa thể hiện ý nghĩa biểu trưng về quyền lực và nghi lễ.',
    modelUrl:
      'https://chyyuuwyznqgw0ru.public.blob.vercel-storage.com/RIU.glb',
    thumbnail: '/images/museum/riudong.png',
    info: {
      title: 'Rìu đồng thời Đông Sơn',
      sections: [
        {
          heading: 'Niên đại',
          body: [
            'Rìu có niên đại khoảng thế kỷ VII – II trước Công nguyên, thuộc văn hóa Đông Sơn.',
            'Đây là giai đoạn rực rỡ của kỹ nghệ đúc đồng ở lưu vực sông Hồng và Bắc Trung Bộ.'
          ],
        },
        {
          heading: 'Hình dáng',
          body: [
            'Rìu có lưỡi xòe rộng, thân cong, phần họng tra cán nổi rõ.',
            'Kiểu dáng cân đối, chắc khỏe, phù hợp cho cả sử dụng thực tế và mục đích nghi lễ.'
          ],
        },
        {
          heading: 'Trang trí',
          body: [
            'Bề mặt rìu được trang trí hoa văn hình học khắc chìm, bố cục gọn gàng.',
            'Các đường viền song song và mảng trang trí cho thấy tư duy thẩm mỹ rõ rệt của cư dân Đông Sơn.'
          ],
        },
        {
          heading: 'Công năng và ý nghĩa',
          body: [
            'Rìu được dùng trong lao động như chặt cây, chế tác gỗ, phục vụ nông nghiệp và xây dựng.',
            'Một số rìu đồng có kích thước lớn và trang trí công phu còn mang ý nghĩa biểu trưng, gắn với quyền lực thủ lĩnh hoặc nghi lễ cộng đồng.'
          ],
        },
      ],
    },
  },
  {
    id: 'bronze-bell-glove',
    title: 'Bao tay đeo chuông nhạc bằng đồng',
    tags: [
      'Hiện vật khảo cổ',
      'Nhạc khí cổ',
      'Văn hóa Đông Sơn',
      'Nghi lễ',
    ],
    description:
      'Bao tay đeo chuông nhạc bằng đồng là hiện vật độc đáo của văn hóa Đông Sơn, phản ánh đời sống tinh thần phong phú và vai trò của âm nhạc trong nghi lễ, sinh hoạt cộng đồng của cư dân Việt cổ.',
    modelUrl:
      'https://chyyuuwyznqgw0ru.public.blob.vercel-storage.com/BAO%20DEO%20TAY.glb',
    thumbnail: '/images/museum/baotaychuong.png',
    info: {
      title: 'Bao tay đeo chuông nhạc bằng đồng',
      sections: [
        {
          heading: 'Niên đại',
          body: [
            'Hiện vật có niên đại khoảng thế kỷ VII – II trước Công nguyên, thuộc văn hóa Đông Sơn.',
            'Thời kỳ này đánh dấu sự phát triển rực rỡ của kỹ thuật luyện kim và nghệ thuật tạo hình bằng đồng.'
          ],
        },
        {
          heading: 'Hình dáng',
          body: [
            'Bao tay được đúc bằng đồng, có dạng ống hoặc nửa ống ôm sát cổ tay.',
            'Trên thân gắn nhiều chuông nhỏ, phân bố đều để tạo âm thanh khi cử động.'
          ],
        },
        {
          heading: 'Trang trí',
          body: [
            'Bề mặt hiện vật có thể được trang trí hoa văn hình học đơn giản hoặc để trơn.',
            'Các chuông nhỏ có tạo hình cân đối, cho thấy trình độ đúc đồng tinh xảo.'
          ],
        },
        {
          heading: 'Công năng và ý nghĩa',
          body: [
            'Bao tay đeo chuông được sử dụng trong múa hát, nghi lễ tín ngưỡng hoặc sinh hoạt cộng đồng.',
            'Âm thanh phát ra khi di chuyển mang ý nghĩa kết nối con người với thần linh, đồng thời thể hiện vai trò của âm nhạc trong đời sống tinh thần Đông Sơn.'
          ],
        },
      ],
    },
  },
  {
    id: 'tuong-nguoi-da-van-dien',
    title: 'Tượng người bằng đá Văn Điển',
    tags: [
      'Hiện vật khảo cổ',
      'Điêu khắc đá',
      'Văn hóa tiền – sơ sử',
      'Nghệ thuật cổ Việt Nam',
    ],
    description:
      'Tượng người bằng đá Văn Điển là hiện vật điêu khắc cổ được phát hiện tại khu vực Văn Điển (Hà Nội), phản ánh tư duy thẩm mỹ và đời sống tín ngưỡng của cư dân Việt cổ thông qua nghệ thuật tạo hình bằng đá.',
    modelUrl:
      'https://owt7mossrpoqktst.public.blob.vercel-storage.com/TUONG%20VAN%20DIEN.glb',
    thumbnail: '/images/museum/tuongnguoidavandien.png',
    info: {
      title: 'Tượng người bằng đá Văn Điển',
      sections: [
        {
          heading: 'Niên đại',
          body: [
            'Hiện vật có niên đại thuộc giai đoạn tiền – sơ sử, cách nay khoảng vài nghìn năm.',
            'Đây là thời kỳ cư dân Việt cổ đã biết chế tác công cụ và tác phẩm nghệ thuật từ đá với trình độ kỹ thuật đáng chú ý.'
          ],
        },
        {
          heading: 'Hình dáng',
          body: [
            'Tượng được tạc từ khối đá nguyên, thể hiện hình người ở tư thế đứng hoặc ngồi tùy theo hiện trạng bảo tồn.',
            'Các đường nét cơ thể được giản lược, tập trung nhấn mạnh phần đầu và thân.'
          ],
        },
        {
          heading: 'Trang trí',
          body: [
            'Bề mặt tượng được ghè đẽo và mài nhẵn tương đối, có thể xuất hiện những chi tiết khắc nông để thể hiện khuôn mặt hoặc trang phục.',
            'Phong cách tạo hình mang tính biểu trưng nhiều hơn là tả thực.'
          ],
        },
        {
          heading: 'Công năng và ý nghĩa',
          body: [
            'Tượng có thể gắn với tín ngưỡng thờ cúng tổ tiên hoặc các nghi lễ liên quan đến cộng đồng cư dân cổ.',
            'Hiện vật góp phần minh chứng cho sự hình thành sớm của nghệ thuật điêu khắc và đời sống tinh thần phong phú của người Việt thời tiền – sơ sử.'
          ],
        },
      ],
    },
  },
  {
    id: 'luoi-hai-dong-co',
    title: 'Lưỡi hái bằng đồng',
    tags: [
      'Hiện vật khảo cổ',
      'Công cụ lao động',
      'Văn hóa Đông Sơn',
      'Nông nghiệp cổ'
    ],
    description:
      'Lưỡi hái bằng đồng là công cụ lao động tiêu biểu của cư dân Việt cổ thời văn hóa Đông Sơn, phản ánh sự phát triển của kỹ thuật luyện kim và nền nông nghiệp trồng lúa nước.',
    modelUrl:
      'https://owt7mossrpoqktst.public.blob.vercel-storage.com/LUOI%20HAI.glb',
    thumbnail: '/images/museum/luoihai.png',
    info: {
      title: 'Lưỡi hái bằng đồng',
      sections: [
        {
          heading: 'Niên đại',
          body: [
            'Hiện vật có niên đại khoảng thế kỷ VII – II trước Công nguyên, thuộc văn hóa Đông Sơn.',
            'Thời kỳ này đánh dấu bước phát triển mạnh mẽ của kỹ thuật đúc đồng và sản xuất nông nghiệp.'
          ],
        },
        {
          heading: 'Hình dáng',
          body: [
            'Lưỡi hái có dạng cong hình bán nguyệt, một cạnh sắc để cắt và một cạnh dày hơn để gia cố.',
            'Phần chuôi hoặc họng tra cán được thiết kế để lắp chắc chắn vào cán gỗ.'
          ],
        },
        {
          heading: 'Kỹ thuật chế tác',
          body: [
            'Hiện vật được đúc bằng đồng, sau đó mài sắc phần lưỡi để tăng hiệu quả sử dụng.',
            'Hình dáng cân đối và độ mỏng của lưỡi cho thấy trình độ luyện kim và kỹ thuật đúc khuôn đã đạt mức cao.'
          ],
        },
        {
          heading: 'Công năng và ý nghĩa',
          body: [
            'Lưỡi hái được sử dụng chủ yếu trong thu hoạch lúa và các loại cây trồng khác.',
            'Sự xuất hiện phổ biến của lưỡi hái bằng đồng phản ánh vai trò trung tâm của nông nghiệp trong đời sống kinh tế và xã hội cư dân Đông Sơn.'
          ],
        },
      ],
    },
  },
  {
    id: 'nha-chuong-dong-son',
    title: 'Nha chương',
    tags: [
      'Hiện vật khảo cổ',
      'Ngọc khí',
      'Văn hóa Đông Sơn',
      'Nghi lễ'
    ],
    description:
      'Nha chương là một loại ngọc khí nghi lễ quý hiếm, thường được chế tác từ đá ngọc, gắn với quyền uy và tín ngưỡng của tầng lớp thủ lĩnh trong xã hội cổ đại Việt Nam.',
    modelUrl:
      'https://owt7mossrpoqktst.public.blob.vercel-storage.com/NHA%20CHUONG%20ALL.glb',
    thumbnail: '/images/museum/nhachuong.png',
    info: {
      title: 'Nha chương',
      sections: [
        {
          heading: 'Niên đại',
          body: [
            'Hiện vật có niên đại khoảng thiên niên kỷ I trước Công nguyên, xuất hiện trong bối cảnh văn hóa Đông Sơn.',
            'Sự hiện diện của nha chương cho thấy mối giao lưu văn hóa rộng rãi giữa cư dân Việt cổ với các khu vực lân cận.'
          ],
        },
        {
          heading: 'Chất liệu và hình dáng',
          body: [
            'Nha chương thường được chế tác từ đá ngọc hoặc đá cứng, có màu sắc trang nhã.',
            'Hình dáng phổ biến là bản dẹt, thuôn dài, một đầu nhọn hoặc tạo hình cách điệu, thể hiện kỹ thuật mài giũa tinh xảo.'
          ],
        },
        {
          heading: 'Kỹ thuật chế tác',
          body: [
            'Hiện vật được tạo hình bằng kỹ thuật cưa, khoan và mài đá công phu.',
            'Bề mặt được đánh bóng nhẵn, các cạnh sắc nét thể hiện trình độ thủ công cao.'
          ],
        },
        {
          heading: 'Công năng và ý nghĩa',
          body: [
            'Nha chương không phải là công cụ sản xuất mà mang tính nghi lễ, biểu trưng cho quyền lực hoặc địa vị xã hội.',
            'Hiện vật góp phần phản ánh cơ cấu xã hội phân tầng và đời sống tín ngưỡng phát triển của cư dân Đông Sơn.'
          ],
        },
      ],
    },
  }
];