import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamsList} from '../routes';

export type AppNavigationProp = NativeStackNavigationProp<RootParamsList>;

const useAppNavigation = useNavigation<AppNavigationProp>;

export default useAppNavigation;
