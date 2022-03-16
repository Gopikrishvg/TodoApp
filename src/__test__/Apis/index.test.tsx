import axios from 'axios';
import mockAxios from 'jest-mock-axios';

interface CreateTodo {
  title: string | undefined;
  userId: number;
  completed: boolean;
}

const requestObj = {
  userId: 1,
  title: 'test',
  completed: true,
};

const responseObj = {
  userId: 1,
  title: 'test',
  completed: false,
  id: 201,
};

afterEach(() => {
  mockAxios.reset();
});

const postAxios = async (clientMessage: CreateTodo) => {
  const serverData = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    {data: clientMessage},
  );
  return serverData.data;
};

const postAxiosMock = jest.fn(() => Promise.resolve({data: responseObj}));

it('cakk axios and response', async () => {
  const res = await postAxios(requestObj);
  console.log('-->', res);
  postAxiosMock();
  expect(res.id).toEqual(responseObj.id);
  expect(postAxiosMock).toHaveBeenCalled();
});
