import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { Blank, Icon } from '..';
import { ThemeContext } from '../contexts';

import * as Icons from '../icons/components';

test('Icon renders', () => {
  const component = renderer.create((
    <Icon>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
    </Icon>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Blank icon renders', () => {
  const component = renderer.create(<Blank />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Icon renders custom title', () => {
  const component = renderer.create((
    <Icon a11yTitle='testing'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
    </Icon>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Icon renders large', () => {
  const component = renderer.create((
    <Icon size='large'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
    </Icon>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Icon renders extra large', () => {
  const component = renderer.create((
    <Icon size='xlarge'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
    </Icon>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Icon with ThemeProvider', () => {
  const component = renderer.create((
    <ThemeProvider
      theme={{
        color: '#888888',
        size: {
          large: '24px',
          xlarge: '112px',
        },
      }}
    >
      <Icon size='xlarge'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
      </Icon>
    </ThemeProvider>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});

test('Icon with ThemeContext', () => {
  const component = renderer.create((
    <ThemeContext.Provider
      value={{
        color: '#888888',
        size: {
          large: '24px',
          xlarge: '112px',
        },
      }}
    >
      <Icon size='xlarge'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
      </Icon>
    </ThemeContext.Provider>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});

test('Icon with ThemeContext colors', () => {
  const component = renderer.create((
    <ThemeContext.Provider
      value={{
        color: '#888888',
        colors: {
          happy: '#cccc44',
        },
        size: {
          large: '24px',
          xlarge: '112px',
        },
      }}
    >
      <Icon size='xlarge' color='happy'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g fill='#000000'><path d='M3.548,12.406 C3.555,17.283 7.536,21.26 12.405,21.253 C17.283,21.246 21.259,17.265 21.253,12.395 C21.246,7.518 17.265,3.541 12.395,3.548 C7.517,3.555 3.541,7.536 3.548,12.406 Z M12.969,2 C13.034,2.049 13.111,2.034 13.184,2.042 C13.473,2.074 13.764,2.091 14.05,2.138 C16.032,2.467 17.789,3.284 19.288,4.624 C21.166,6.304 22.302,8.395 22.679,10.891 C22.726,11.204 22.76,11.518 22.8,11.832 L22.8,12.969 C22.753,13.034 22.766,13.112 22.758,13.185 C22.727,13.473 22.71,13.764 22.662,14.05 C22.336,16.018 21.528,17.764 20.203,19.257 C18.514,21.159 16.408,22.306 13.889,22.682 C13.583,22.727 13.276,22.761 12.969,22.8 L11.831,22.8 C11.767,22.751 11.689,22.767 11.616,22.759 C11.328,22.727 11.037,22.71 10.75,22.662 C8.79,22.337 7.049,21.535 5.558,20.217 C3.647,18.527 2.496,16.416 2.119,13.889 C2.073,13.584 2.039,13.276 2,12.969 L2,11.832 C2.048,11.766 2.034,11.689 2.042,11.616 C2.073,11.328 2.091,11.036 2.138,10.75 C2.464,8.79 3.266,7.049 4.584,5.558 C6.274,3.647 8.385,2.496 10.911,2.119 C11.217,2.073 11.525,2.04 11.831,2 L12.969,2 Z M12.3924,6.5483 C11.5984,6.5553 10.9474,7.2173 10.9584,8.0073 C10.9704,8.8013 11.6094,9.4373 12.3974,9.4383 C13.1924,9.4403 13.8454,8.7863 13.8424,7.9923 C13.8394,7.1963 13.1824,6.5423 12.3924,6.5483 Z M11.1914,14.2983 C10.9654,15.3783 10.6564,16.4353 10.3514,17.4933 C10.3044,17.6563 10.2924,17.8243 10.4354,17.9443 C10.5754,18.0623 10.7434,18.0173 10.9014,17.9753 C10.9914,17.9523 11.0504,17.8853 11.1024,17.8133 C11.2144,17.6583 11.2984,17.4893 11.3604,17.3093 C11.6494,16.4643 11.8864,15.6053 12.0704,14.7313 C12.1004,14.5923 12.1274,14.4523 12.1684,14.3173 C12.2044,14.2033 12.2714,14.1103 12.4094,14.1053 C12.5514,14.1003 12.6184,14.1973 12.6574,14.3073 C12.7144,14.4663 12.7594,14.6293 12.8004,14.7933 C13.0154,15.6453 13.2284,16.4973 13.4974,17.3343 C13.5714,17.5613 13.6614,17.7813 13.8574,17.9343 C14.0224,18.0633 14.2554,18.0603 14.4434,17.9203 C14.5894,17.8113 14.5144,17.6623 14.4974,17.5263 C14.4924,17.4873 14.4754,17.4483 14.4624,17.4103 C13.9424,15.9463 13.5794,14.4433 13.3994,12.9003 C13.3374,12.3633 13.2634,11.8243 13.3314,11.2813 C13.3734,10.9393 13.5364,10.7683 13.8794,10.7343 C14.2894,10.6943 14.7024,10.6833 15.1144,10.6563 C15.6474,10.6233 16.1834,10.6183 16.7114,10.5273 C16.9924,10.4793 17.1464,10.3193 17.1374,10.1163 C17.1274,9.8933 16.9654,9.7553 16.6744,9.7233 C16.6274,9.7183 16.5794,9.7193 16.5324,9.7233 C15.8504,9.7783 15.1694,9.8313 14.4884,9.8893 C12.7084,10.0413 10.9324,9.9703 9.1564,9.8123 C8.7794,9.7783 8.4014,9.7523 8.0234,9.7383 C7.8344,9.7303 7.7034,9.8253 7.6714,10.0293 C7.6404,10.2293 7.7204,10.3813 7.9124,10.4713 C8.0434,10.5313 8.1854,10.5533 8.3264,10.5663 C9.1144,10.6423 9.9004,10.7303 10.6934,10.7463 C11.4324,10.7623 11.5724,10.9223 11.5504,11.6693 C11.5214,12.5583 11.3724,13.4303 11.1914,14.2983 Z M5.2104,12.3943 C5.2174,8.4233 8.4474,5.1993 12.4104,5.2113 C16.3764,5.2223 19.5834,8.4313 19.5894,12.3953 C19.5944,16.3613 16.3664,19.5913 12.3994,19.5893 C8.4294,19.5873 5.2044,16.3593 5.2104,12.3943 Z' /></g></g>
      </Icon>
    </ThemeContext.Provider>
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});

test('Icon renders all icons', () => {
  Object.keys(Icons).forEach((iconKey) => {
    const Instance = Icons[iconKey];
    if (Instance !== true) {
      const component = renderer.create(<Instance />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    }
  });
});
