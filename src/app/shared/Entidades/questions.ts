import { answer } from './answer';

export interface questions{

  id: string,
  index: number,
  text: string,
  chapterId: string,
  typeQuestions: string,

  listAnswer: answer[]

}
