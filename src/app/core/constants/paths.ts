export const BACKEND_URL = 'https://yoda.pboudeaud.fr/api';
export const IMAGE_ENDPOINT = `${BACKEND_URL}/showFile`;
export const QUIZZ_ENDPOINT = `${BACKEND_URL}/quizz`;
export const QUIZZ_ENDPOINT_ID = (quizzId: string = '') => `${QUIZZ_ENDPOINT}/${quizzId}`;
