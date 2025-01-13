import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Swiper showsButtons={true} loop={false}>
        <View style={styles.slide}>
          <Image
            source={{ uri: 'https://topshop.com.vn/upload_file/studio/5111377704771_747046077461068_2659915969461755957_n.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Chào mừng bạn đến với ứng đụng Gara UTE!</Text>
          <Text style={styles.description}>Hãy bắt đầu với những trải nghiệm tốt nhất của chúng tôi.</Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={{ uri: 'https://thanhphongauto.com/wp-content/uploads/2021/08/gara-sua-chua-bao-duong-o-to-quan-1-1.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Dịch vụ tốt nhất</Text>
          <Text style={styles.description}>Được tận hưởng những dịch vụ và ưu đãi tốt nhất từ chúng tôi.</Text>
        </View>
        <View style={styles.slide}>
          <Image
            source={{ uri: 'https://shopphutung.net/wp-content/uploads/2019/05/shopphutung-4.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Tham gia ngay với chúng tôi</Text>
          <Text style={styles.description}>Tham gia mua sắm phụ kiện và sử dụng những dịch vụ của chúng tôi ngay hôm nay!.</Text>
          <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: Dimensions.get('window').width - 32,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
});

export default OnboardingScreen;
