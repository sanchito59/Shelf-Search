import React from 'react';
import googleBookSearchReducer from './../reducers/google-book-search-reducer';

describe("googleBookSearchReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(googleBookSearchReducer({}, { type: null })).toEqual({});
  });
});