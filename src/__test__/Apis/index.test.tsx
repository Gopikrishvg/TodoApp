import axios from 'axios';
import mockAxios from 'jest-mock-axios';

interface CreateTodo {
  title: string | undefined;
  userId: number;
  completed: boolean;
}

interface CreateTodo1 {
  title: string | undefined;
  userId: number;
  id: number;
  completed: boolean;
}

afterEach(() => {
  mockAxios.reset();
});

const ServerProxy = async (clientMessage: CreateTodo) => {
  const serverData = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    {data: clientMessage},
  );

  return serverData.data;
};

describe('UserService', () => {
  it('Todo should call axios ', async () => {
    const message = {
      userId: 1,
      title: 'test',
      completed: false,
    };

    const promise = ServerProxy(message);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
      {
        data: message,
      },
    );

    const responseObj = {...message, id: 201};
    mockAxios.mockResponse({data: responseObj});

    const result = await promise;
    expect(result.title).toEqual('test');
  });
});
