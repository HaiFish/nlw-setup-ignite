import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import colors from 'tailwindcss/colors';

import Logo from './../assets/logo.svg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const HEADER_SIZE = SCREEN_WIDTH / 4;

export function Header() {
    const { navigate } = useNavigation();
    return (
        <View className="w-full flex-row items-center justify-between">
            <Logo width={HEADER_SIZE} />

            <TouchableOpacity
                activeOpacity={0.7}
                className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
                onPress={() => navigate('new')}
            >

                <Feather
                    name="plus"
                    color={colors.violet[500]}
                    size={20}
                />
                <Text className="text-white ml-3 font-semibold text-base">
                    Novo
                </Text>
            </TouchableOpacity>
        </View>
    );
}