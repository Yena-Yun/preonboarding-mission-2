import { expect, test } from '@jest/globals';
import { fn } from './functions';

test('1번째 페이지 데이터 10개 받아오기', async () => {
  const response = await expect(
    fn.getSearchData({ inputText: 'lorem', page: 1, limit: 10 })
  );

  response.resolves.toBe([
    'Maecenas in lorem sit amet felis volutpat dapibus vulputate at dui.',
    'Nam porta lorem ut turpis pellentesque, et efficitur felis ullamcorper.',
    'Duis fringilla turpis vel lorem eleifend, sit amet hendrerit velit gravida.',
    'Cras in felis eget augue cursus placerat ac eget lorem.',
    'Sed id orci quis mi porttitor pulvinar cursus eget lorem.',
    'Fusce tincidunt lorem ac purus elementum, ut fermentum lacus mollis.',
    'Nam commodo lorem ac posuere dignissim.',
    'Etiam eu elit finibus enim consequat scelerisque aliquam vulputate lorem.',
    'Donec in lorem id eros ornare aliquam ut a nisi.',
    'Donec efficitur nulla eget lorem sollicitudin, in blandit massa dictum.',
  ]);
});
