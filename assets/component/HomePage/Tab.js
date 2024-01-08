import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tab = () => {
    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/login.png')
                                } />
                        ),
                    }}
                />
                <Tab.Screen name="Open Trade" component={OpenTrade}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/forgot.jpg')
                                } />
                        ),
                    }}
                />
                <Tab.Screen name="Deposit" component={Deposit}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/forgot.jpg')
                                } />
                        ),
                    }}
                />
                <Tab.Screen name="Profit/Loss" component={ProfitLoss}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/forgot.jpg')
                                } />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../app/img/forgot.jpg')
                                } />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default Tab;

const styles = StyleSheet.create({})