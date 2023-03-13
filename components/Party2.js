import { StyleSheet, View } from 'react-native';
import Party from './Party';
import Header from './Header';
import { ScrollView, Image } from 'react-native';
import Footer from './Footer';


export default function Party2({ navigation }) {

  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView style={styles.scroll}>
      <View style={styles.moreblank}></View>
      <Image style={styles.imagebeggining} source={require ("../assets/games.png")}></Image>
        <View style={styles.container}>
          <Party
            source="https://is.gd/guMqQS"
            title="3 Wishes"
            text="3-4 players"
            bottomtext="3 - 5 mins"
            navigation={navigation}
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/bVkQUDwOTs0CgISgNf5glRXB9L0Wy3eqyyMZ1P2kqTosuqJyJ1azSNERSCiioGv9iOvR8ZM1Uvy-TaKJWmPkBYDxVbJTnrupJeOlTO9j8Ah2MSdsuFtn0Sfcc69Htxu3kyGtODRBwD9Wc9DuHE0_aU1Fu64atFfVCvBsWMS5QaWWRvUQfFJD2VPdeLpTvShlhU4HePrRAZ7A4EO5yu5orhAWJ4CCzNU_ByTa013etuUsvffyG7p7mG-3tdyanHPggLcvlDsR9n2ub2Mq-dqztKNmmS5drQcYeQOIvI2hIJGpF9xTAs1Teaam7Wu6_EgnSqC0EoAtTtOLAWGdI5FrMPfCpzAJKi07QPfVH4NM3Lf4WKLRMC17uprcMnHTvvf5qCZuV07I-Y1Oag4yc0eb6vJaMf3vPwI5qxbjlfq8jVHYbw8mvFWPnOZVT9z6TXvJeuubYivX_mZrgTsCMRz11jcuIJVgOPdhNhIKRoF-il-R3APHXuoiH0XrPQDmi_aH8Mfad_MrGahpbEkjMmNmHS9siqgQgE9jVm0gKr9hatercGHtkEI-3LgMFJOZJsmGl3xJVFlJciGrv72rREmt40lNE5lLW91SL9-OdE1hm4ukyMLTDHsYZaKa8N1PfkHD_jOOsRxFbAMyqeRsS4uBrKu7lUSHRrk1KbpYheNuwhmMp4ye26OEXXqwmFied9-8wYTO_jj-yrNDTWuO7PnqpSKDDYmblys_8DpnDYTQm-P22XlG1mZAv8Mccl5QoviuzZBHpA1T1ZVliQE7o6_r_aehOrxUUAJ2NIfhDFVpN67AEqYEQh5j1txbD5jbAeZZDSl1bV9GwBE68cPEUTMiqCXZl4iGmQtG7WUMF_wrG8iCc34xw62aQswkKKrkLD3eiwuld1M_LUJXHzihgW8tFUID0T2f2YiTDBK0RZTF7ZzQxwUJ6ZJPiMh6RIGSMhDzR3T1_4Fp1HSuicN49ZL81yAcMG6x-1sqsD40xIL9niHll-c2n5Bbvcdb=s115-no?authuser=0"
            title="Avalon"
            text="4 players"
            bottomtext="1h"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/MOVyKFY7nXsLjFL5LXywDn8tTr_veIQhMBaLGMWkZ1HH5YHIoI3FWyVPv5jc--KN2FKHbJjD_onsj6P9QslK2BoFw6QsWFoqzQIja21YYZSnefmSU-dCnnlJd9GUtSA4htU5qufRTUa_s0Mv1wSMud3L_N0ruD2yZrv3byrSlVbNZyxKVXE1vg_eSVzWdvhnDKBXYsHQeT9afGnCujZTGZAF3KSAImAOQsuTgzBzrCvOsAHL6yHpt75wktxY8TVFXJqAmvzXuPVCeFwXv6Hlf-FIzbx5DXfkuCOEWQgDjJAVImS8EwjE0E5211TKB7_1r66DsHwT8iy8tfr5o92b9H5CFxABw6GF6lc5FgCA0gcaNjtBPang_dBIO78fMTVd6knRFvVcSwXmdjsuVhaY8lf9IqfrAjR_iUg_pzIMV_DUEYeuf1gJNNMSkfqw47lMvDPkaMASUnEG-CXuleoFfj47IdmlTbHdE78NuJfksYqSIXi5bp0TNAUqWG-Q3vhMMv4cD-Ofa83KfSxLB3kj64228rJaweCevKs4CMCav0libGWCbFE3HA0FNtCIVvNqIccAzI3Yfj_I42_Qcyc5WaCwHWHB0RNNSEA2IH3qBJa5vhjBiTkaXQLemVDdJXqVHjGavT-rgQchUz8e5cs5EEpXi0RSekGIUbD_uNCKCFS_g718QMuVpn8kPdFGBHqAvQbakp32zhOYrHrp2Y8RcP5T-fcF89fX3j7Jsn8z9AArwNbfnnuPI8LQbTW5voqAo0Klcs3GcVTPk5tXZcYDIq6cM7J0taekDIp-WWqqXnuKU-j96ZpWbBikKCstEVjSC3KTKCwdCdqMJX_IVGAvIu7T5AxGVyI44_ZlbngQ4VhJUX3vQGW3HaUOxXp8anmC05tkoLJppHpvwk4Ef2lzmdMT9a35BBKT-kPOQr389v_z5ct5-Z8O4Pk7N40bgJkFEn41MbGgTUkwMlv2gTu1lItKxidf2tEvVqIDl9pWXq9HzpvORkOhHQDQ=w114-h117-no?authuser=0"
            title="Bucket of Doom"
            text="4 - 20 players"
            bottomText="Bottom Text"
            bottomtext="30 mins"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/yaqYiRy9e4zgVttMr1Tc8DvAwQXETn06uPaXi65tJVDAjm378uZ2VLbLB0gY3osI0RhuRRCWBSuPFrBKQHpqsDbNTh0LuOAbGEypT-voI-W1LSCV8yV794u1X4x-ZvsQL7ZSs3zk14uUWCYkh3s3zgwyTrwpksXHJ7OdWZ6yJMGGteNbfSkAAp2JvhRlY7zd9jCCmIn2nLwk6XqTCADAJFuBPpJZ1OjpFHrMlhwOLZom-Eir4XCZxQwqYY6-IK9fZaw0J1OP8Z2q2DwO622083PKvYXlGerAT9iyz1GvVn7apXCWSERvYSSo5Dv7mxtwdCFAJWt4W13PHHRmhBdu389ihUgOc92m0qWA-vHpVxo71Iyd9rHNQynVqI-IazZ2PaXS3Zftfe6TIBZcnSqGe3GEO2FRFdew1lD3m1XNLIsOFSIivH4rrDzNVg8RRJPB6MTY1lqBdGMPdQzzOUucTTMRlM2IaLQQoz5HXrKhaz5kmlMW4BUonMZxq8FACPdX_Gn03zQ2K8M16M6eti9fukFqlWJ2vGrdtHk6lTs4neIXUlko4hsGVlq_XpLohMGqwchxe1LtcP7n_p7zCxtxNb392tJJruYb0CmQTrhsx4Pyoo5Xxzo4aRqBJJzMAAbjgp1ZpMgqpv4CzLkT5LTFkEj8n1x9mhZ7KFE2bLEVOiRd9b4S92q64ao5VmUiWGSPYJZvf3gV37WingS3oEHxPjqe82_9FnxUFFeAG0PzLUGq4K3kJwIsM4ZLn4oGzxtQgvpa1tMpwCSh14rwAFqmalk3yQrAKkHAehx9FVmP7fRsmcoUknT5j8vChALSkvbd-QDNkA6tX-kgjfPYP9T45KU4yzEVoh_q2JnmgmeGS_ql2L_dijKplXGXiPXnu7UK3WaXuyCRuLUcEFTk0gmA5NON8iWyS9aDqZ_aktPHsPTSl3ulUcVaArQMGjw0AOd1Sptr9mEbupU5sZXP5zMKgJHdn3O-opsciI0VjPY-55hCyvvTLn00O-I9=s113-no?authuser=0"
            title="Cash N Guns"
            text="4 - 6 players"
            bottomText="Bottom Text"
            bottomtext="3 - 5 mins"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/V-5x1JJ46cU3P_fJRnL0Ph7_GoHBgtkaH0RH8B17jHlzWShivV6Lwj8R5Ob1lkFG1-MahLomCjPqpAgDpSexRhZkX62JNER37jYovEVSkdh2k124XHR0Te4tA0T6jKZcamqZ-b93s1XBOnwCXvTH0IR2HZnevsw4fH06OKbzShUhLiOsHh5ZAd7JQEb3UWIqGppXPj1EWDGqSenCTe-qXy0xjvGT-2O37TtzbIROqpwjxhVRZ0aWm_83GoddCC9_4hSI2Y2zAv9ph8vC0PkA3GR1zjWBiXezx41cfCuONYgmMwOSppjt5R102h3vHhveP8Ue9pRahXkAwEPLh3gcb5s9JB2oIOOcmWtC8317fW24JQyVqabwLLk2cGH7MdOseq37gJcuhozVD1XXsYQcWf64XmskXYJWm1bsflVeHunoUE1dRPcVGEIm9fivhnS6ptOmt1h7UJwe6NJsYXILFBvuhM24TdhqqdK32z3Luuke79ziFZBGRuRPc9L2OnVNAX9Fi7JNC_Gy8ySnJEGVg8-Y6sZM2SWSJzxTkAo7xC36NHFTpVfWmigIXduFQoCXM4jgLik5Klzd-0fHiksM2x1CroWCL0mhqYCOh00SDvRh-xVgGJ1sXSMLxfsx2pOE9Hn_LFn46yNZO1p7xEOL_ZNXt3VE_sa5ku2v1bY7YiB24kQZwlcZl8_p5Q848R5wwmRvF219j2zYIbApkTFNHW80UQq6Sf4_NpLHvAN1zISs2bJy5a0ZSNVSjQ1KpIqZFivHeL5JxeDApqhPw2HJF-foISnoA68DhUjr50SxszwEbagx1AaDxo3x5nA1gOJC144kcvNSUD3W2xFdR3Bd1hNkR1uo_10wtX-9OUYn2hkXHjLH2a2ATOy9oIMtGy6Uwz5kwROq1CpCeUw9m_5vvR64ciiDEqWYC7I0NgG1mJwxR7RczaU_AXke3WJXavcw6o6AtIpXJuUodurH5LX3b4t5yt5j8Kx2SY8jAIAL42nlAhytZrf7L3lT=w112-h118-no?authuser=0"
            title="Codenames"
            text="2 - 8 players"
            bottomText="Bottom Text"
            bottomtext="15 mins"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://media.discordapp.net/attachments/798264990850482187/1084613091955839016/image.png?width=710&height=670"
            title="Color Brain"
            text="3 - 6 players"
            bottomText="Bottom Text"
            bottomtext="20 mins"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/vldjnmgZVa6lrM__ZHBI8eUbs0UOqz6fuGGlXl5jjPko7PGQacfEY0qIPJH8xOLSTk2jmf3CaLD8GLg6eG7hIS6vQd-xdgLoZopVRWJnTtfC7UfWJaNOsXyxnK0EIAwdJLzbDC5ch1hGeVPXxD4EfCv6uEQRlZKc-ihZZ6HMnO75xqcdDS-MJAT7rv3-Y6f2ljoGzEAIzBbE0pBsaYu1y39SQ4iR6YFqBRUlzFn_2Su8-PUUb9yWGfXb9Lvy60AeVUui9SPPWAIHKHhe2D-zyunpHqgr_72JqoVvsTsv6SlO1zZF5JvnSQReKI7weOr45fncjkxEmN9PQzXUW5-7fQuc4wHIWd6RPvuwWBHTYJEOnLqnzvthYYt__QpZHStcgoHvncb9aGBoOxzs-RVeaej6Nel9-2b9_0pIUPgaigfNg1AjWNf8xrrmEPMvEMvbx41gOMAtfvOI8SH_HiILz3zoX2xBcutoz9zTNIb71VA37WiggXJOj8NQXpwAEPJNlcjaz0nxaO17TXR3qVIfU_yCELvo_c6g_90KKHu3gCKLXPff_H9a2R6iVfM7NFV2Xe2vSZKspJy3cl8bZv-obuVmnG5_GyR6Kyg-WZPvOH8MSZ1-nM3hINzAPz99eou67knY3PHU40Okt0zixnRJVphIh1Qp-pQGxSiwhKwnFBmasl4CVm0-kMwZIcZbNZqLhIeQEyQpdGOGuoOqeZgAzr8I255zDiixeei5na64iD2sr-jSTAU9D4fBbZOUuo2Ij3DBOKhvyCubXMa6VB6ES1bz2To2eUp78ZOjp6Zrm8EX-B8tdcSi2qftsNjo7cNCaZfzQFmZj63Y9fmGo_JdMsjM2VPXEww_4X1vx-QqlXlvWylw9lSuzu0mR4cjp4xc95QQFiUc5mlcZH9NoNE3x_ARNLUf-OXUzxwRBxKLk5yMPS2WmrqiruIEIlRVCPl6aiPr-RMKF6-53Trb4N6_7cri55vDh-Y2f5L_s2zTNEkTAZsq9oMT6Qr1=s115-no?authuser=0"
            title="Concept"
            text="4 - 12 players"
            bottomText="Bottom Text"
            bottomtext="40 mins"
          >
          </Party>

          <Party
            navigation={navigation}
            source="https://lh3.googleusercontent.com/kS9IK3jIrcG6UVPIDpLt3TZO0AeKrg44lTx2HWyjo1fNpw24NTTNyDGBeopoUhBmcf2emeMDRPBODpJVhcpuE-5n-ms1iv7iFx8XA1zdoPQIZ7APIu0My09Mbf_xtuI6MhwJRiS8UP_B8dkc61iGYyaHMVvrYAYJQCwKAJ9gZ7ORx8EkC3aYCuqs1wTS6fmRHt90S3UQXt6SSqz4ZT2Jvo8LQA_QlBb0k0b9wzBZOeqKM3s6m513VGK2CVZlBK9AJKA-ALd21tvO6kZnXodX5kDYKWMQ6Qatg8aClfIy4IWt0ayedxQ-FAcMmV3Azax6Th3od86DReUTGb0NLRr59JES81hTQo4XarXFu5tkikAnxqlyRZXjpv6yc4loONanjBK1It5exbDFo_Nn2rpI8rISEGV4VY7jiHoOI5u0mxUWTsCphI21VlXxuq22iheeVMZ37P9XCxbaHi1hfPA5r5WIiz13JHTKy3I-ACeSSIfLiVae_WHOC-mA__bMQlBDUbFt2kaNHCzgNmkbnGtf0FsjE6ZDDZzoiv1lKjd2QRz7FMe37LP2FOdC8IXZXqX-lCnNQxr2414Pao01wj7lgvO6VIuuwkJ8RzDa5EmWyOq8GRCkpaPGnqFSCU37q789kD1bD53gQRjHD6zrSjyPNvYT-M8fuwqkT9lgJOFL3VypoKVEyMGeEaGLoBvDyOXOVq_ynA2bRt5v45RGgdb3K3yf1ok4XLR7dBIlKkZl8l4ahTmHsqzR6l1J8cSNL2HDDJuD1Obqh-EWUBkrnIOkcsDbraQN2twGyaTxi55mcy_8kSEIMLT2PKLiVQaZ32NtGveVooaibjnrDLZAf-zVcBsZ6Ddjgl8U5mHiZowUBtZIcoYAPxx877j9D7S_b8FCu6FhrKEBkzwHHjXUGE0D6ZV3XVCFRLYCPh51PxP22Bjv_bGfIt4gmFC4jYiSs4eez9i1C9u5k_JVzSvg_QfnGGrDngu3KaGJF1ZFb_1s2rk9iwFIWrvQVwcL=s115-no?authuser=0"
            title="Coup"
            text="2 - 6 players"
            bottomText="Bottom Text"
            bottomtext="3 - 5 mins"
          >
          </Party>
        </View>
        <View style={styles.moreblankfooter}></View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{
    backgroundColor:"white"
  },
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  moreblankfooter: {
    height: 100,
  },
  moreblank:{height:130},
  imagebeggining:{
    width:"100%",
    height:220,
    resizeMode:"contain",
},
});


