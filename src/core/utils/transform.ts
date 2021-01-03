import { plainToClass } from 'class-transformer';
import { Model } from 'sequelize/types';

export declare type ClassType<T> = {
  new (...args: any[]): T;
};

export function toClass <T>(cls: ClassType<T>, promise: Promise<Model | undefined | null>): Promise<T> {
  return promise.then(value => plainToClass(cls, value?.toJSON()));
}

export function arrayToClass <T>(cls: ClassType<T>, promise: Promise<Model[]>): Promise<T[]> {
  return promise.then(values => plainToClass(cls, values.map(value => value.toJSON())));
}
