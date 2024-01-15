import Navigator from './src/navigation';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

export default function App() {
  return <Navigator />;
}
