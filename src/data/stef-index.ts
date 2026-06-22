import { stefLinuxQuestions } from './stef-linux';
import { stefSqlQuestions } from './stef-sql';
import { stefAppSupportQuestions } from './stef-appsupport';
import { stefNetworkingQuestions } from './stef-networking';
import { stefMonitoringQuestions } from './stef-monitoring';
import { stefPhpQuestions } from './stef-php';
import { stefMessagingQuestions } from './stef-messaging';
import { stefMongoQuestions } from './stef-mongodb';
import { stefCloudQuestions } from './stef-cloud';
import { stefCustomerQuestions } from './stef-customer';

export const stefAllQuestions = [
  ...stefLinuxQuestions,
  ...stefSqlQuestions,
  ...stefAppSupportQuestions,
  ...stefNetworkingQuestions,
  ...stefMonitoringQuestions,
  ...stefPhpQuestions,
  ...stefMessagingQuestions,
  ...stefMongoQuestions,
  ...stefCloudQuestions,
  ...stefCustomerQuestions,
];
