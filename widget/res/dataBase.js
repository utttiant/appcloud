var dataBase = {
		// 2.4
		'g24Standard':{
			'items':[
				{'value':'0','text':'{bgnMixture}'},
	            {'value':'1','text':'{only11g}'},
	            {'value':'2','text':'{only11n}'}
	            
	            ]
		},
		'g24PowerLevel':{
			'items':[
				{'value':'3','text':'{high}'},
				{'value':'2','text':'{in}'},
				{'value':'1','text':'{low}'}
			]
		},
		'g24Zone':{
			'items':[
	                	{'value':'1','text':'FCC'},
	                	{'value':'2','text':'ETSI'},
	                	{'value':'3','text':'{Japan}'}
	                ]
		},
		'g24Channel':{
			'items':[
	                	{'value':'0','text':'auto'},
	                	{'value':'1','text':'1'},
	                	{'value':'2','text':'2'},
	                	{'value':'3','text':'3'},
	                	{'value':'4','text':'4'},
	                	{'value':'5','text':'5'},
	                	{'value':'6','text':'6'},
	                	{'value':'7','text':'7'},
	                	{'value':'8','text':'8'},
	                	{'value':'9','text':'9'},
	                	{'value':'10','text':'10'},
	                	{'value':'11','text':'11'},
	                	{'value':'12','text':'12'},
	                	{'value':'13','text':'13'}
	                ]
	            },
	    'g24Channel1':{
			'items':[
	                	{'value':'0','text':'auto'},
	                	{'value':'1','text':'1'},
	                	{'value':'2','text':'2'},
	                	{'value':'3','text':'3'},
	                	{'value':'4','text':'4'},
	                	{'value':'5','text':'5'},
	                	{'value':'6','text':'6'},
	                	{'value':'7','text':'7'},
	                	{'value':'8','text':'8'},
	                	{'value':'9','text':'9'},
	                	{'value':'10','text':'10'},
	                	{'value':'11','text':'11'}
	                ]
	            },

	    'g24Bandwidth':{
	    	'items':[
	    	            {'value':'1','text':'{auto}'},
	                	{'value':'0','text':'20M'},
	                	{'value':'40','text':'40M'}
	                ]
	    },
	    'g24Bitrate':{
	    	'items':[
	                	{'value':'0','text':'{auto}'},
	                	{'value':'1','text':'11M'},
	                	{'value':'2','text':'54M'},
	                	{'value':'3','text':'150M'},
	                	{'value':'4','text':'300M'}
	                ]
	    },
	    'g24PowerMode':{
	    	'items':[
	                	{'value':'0','text':'{auto}'},
	                	{'value':'1','text':'{manual}'},
	                ]
	    },
        'g24AntiInterferenceLevel':{
        	'items':[
            	{'value':'1','text':'1'},
            	{'value':'2','text':'2'},
            	{'value':'3','text':'3'},
            	{'value':'4','text':'4'},
            	{'value':'5','text':'5'}
            ]
        },
        'g24ChannelSwitchNotification':{
        	'items':[
	                	{'value':'0','text':'0'},
	                	{'value':'1','text':'1'},
	                	{'value':'2','text':'2'},
	                	{'value':'3','text':'3'},
	                	{'value':'4','text':'4'},
	                	{'value':'5','text':'5'},
	                	{'value':'6','text':'6'},
	                	{'value':'7','text':'7'},
	                	{'value':'8','text':'8'},
	                	{'value':'9','text':'9'}

	                ]


		},
		// // 客户端
		'bandSwitchMode':{
			'items':[
	                	{'value':'0','text':'{disabled}'},
	                	{'value':'1','text':'{Optimization5hz}'},
	                	{'value':'2','text':'{Mandatory5GHz}'},
	                	{'value':'3','text':'{Bandbalance}'}
	                ]
	            },
	     'emptyPortBalanceMode':{
	     	'items':[
	     				{'value':'1','text':'{Optimalaccess}'},
	                	{'value':'2','text':'{Defaultaccess}'},
	                	{'value':'3','text':'{Fairaccess}'}
	                	
	                ]
	            },
	    'spectrumLoadBalance':{
	    	'items':[
	                	{'value':'0','text':'{disabled}'},
	                	{'value':'1','text':'{Enabled}'}
	                ]
	            },
	    // seniorPoit
	    'minPowerVal':{
	    	'items':[
	    				{'value':'0','text':'{Maximumvalue}'},
	                	{'value':'3','text':'3'},
	                	{'value':'6','text':'6'},
	                	{'value':'9','text':'9'},
	                	{'value':'12','text':'12'},
	                	{'value':'15','text':'15'},
	                	{'value':'18','text':'18'},
	                	{'value':'21','text':'21'},
	                	{'value':'24','text':'24'},
	                	{'value':'27','text':'27'},
	                	{'value':'30','text':'30'},
	                	{'value':'33','text':'33'}
	                	
	                ]
	            },
	    'maxPowerVal':{
	    	'items':[
	    				{'value':'0','text':'{Maximumvalue}'},
	                	{'value':'3','text':'3'},
	                	{'value':'6','text':'6'},
	                	{'value':'9','text':'9'},
	                	{'value':'12','text':'12'},
	                	{'value':'15','text':'15'},
	                	{'value':'18','text':'18'},
	                	{'value':'21','text':'21'},
	                	{'value':'24','text':'24'},
	                	{'value':'27','text':'27'},
	                	{'value':'30','text':'30'},
	                	{'value':'33','text':'33'}
	                	
	                ]
	            },
	    'clientProbe':{
	    	'items':[
	                	{'value':'0','text':'{disabled}'},
	                	{'value':'1','text':'{Enabled}'}
	                ]
	            },
	    'scan':{
	    	'items':[
	                	{'value':'0','text':'{disabled}'},
	                	{'value':'1','text':'{Enabled}'}
	                ]
	            },
	    'wideChannelBand':{
	    	'items':[
	    				{'value':'0','text':'{disabled}'},
	                	{'value':'1','text':'{Enabled}'}
	                	
	                ]
	            },
	     // 5G
	     'g5Standard':{
	     	'items':[
	                	{'value':'4','text':'{anMixture}'},
	                	{'value':'3','text':'{only11a}'},
	                	{'value':'5','text':'11vht AC/AN/A','control':'g5VhtBandwidth'},
	                	{'value':'6','text':'11vht AC/AN','control':'g5VhtBandwidth'}
	                ]
	            },
	            // 国家码
	     'g5Zone':{
	     	'items':[
	                	{'value':'0','text':'{America}'},
	                	{'value':'1','text':'{Angola}'},
	                	{'value':'2','text':'{Britain}'},
	                	{'value':'3','text':'{Canada}'},
	                	{'value':'4','text':'{Croatia}'},
	                	{'value':'5','text':'{France}'},
	                	{'value':'6','text':'{Germany}'},
	                	{'value':'7','text':'{India}'},
	                	{'value':'8','text':'{Italy}'},
	                	{'value':'9','text':'{Malaysia}'},
	                	{'value':'10','text':'{Mexico}'},
	                	{'value':'11','text':'{Peru}'},
	                	{'value':'12','text':'{Russia}'},
	                	{'value':'13','text':'{Singapore}'},
	                	{'value':'14','text':'{Spain}'},
	                	{'value':'15','text':'{Taiwan}'},
	                	{'value':'16','text':'{Emirates}'},
	                	{'value':'17','text':'{Other}'},
	                	{'value':'18','text':'{Vietnam}'},
	                	{'value':'19','text':'{China}'},
	                	{'value':'20','text':'{Emirates}'},
	                ]
	            },
	        'g5Zone_0':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	        'g5Zone_1':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'100','text':'100'},
	                	{'value':'104','text':'104'},
	                	{'value':'108','text':'108'},
	                	{'value':'112','text':'112'},
	                	{'value':'116','text':'116'},
	                	{'value':'120','text':'120'},
	                	{'value':'124','text':'124'},
	                	{'value':'128','text':'128'},
	                	{'value':'132','text':'132'},
	                	{'value':'136','text':'136'},
	                	{'value':'140','text':'140'}
	                ]
	            },
	            // 国家码中g5Zone_2,4,5,6,8,14通用
	         'g5Zone_2':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'}
	                ]
	            },
	        'g5Zone_3':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'100','text':'100'},
	                	{'value':'104','text':'104'},
	                	{'value':'108','text':'108'},
	                	{'value':'112','text':'112'},
	                	{'value':'116','text':'116'},
	                	{'value':'132','text':'132'},
	                	{'value':'136','text':'136'},
	                	{'value':'140','text':'140'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_7':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_9':{
	     	'items':[
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            // g5Zone_10，13通用
	            'g5Zone_10':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            }, 
	            'g5Zone_11':{
	     	'items':[
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	             'g5Zone_12':{
	     	'items':[
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'}
	                ]
	            },
	             'g5Zone_19':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_15':{
	     	'items':[
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'100','text':'100'},
	                	{'value':'104','text':'104'},
	                	{'value':'108','text':'108'},
	                	{'value':'112','text':'112'},
	                	{'value':'116','text':'116'},
	                	{'value':'120','text':'120'},
	                	{'value':'124','text':'124'},
	                	{'value':'128','text':'128'},
	                	{'value':'132','text':'132'},
	                	{'value':'136','text':'136'},
	                	{'value':'140','text':'140'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_20':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'100','text':'100'},
	                	{'value':'104','text':'104'},
	                	{'value':'108','text':'108'},
	                	{'value':'112','text':'112'},
	                	{'value':'116','text':'116'},
	                	{'value':'120','text':'120'},
	                	{'value':'124','text':'124'},
	                	{'value':'128','text':'128'},
	                	{'value':'132','text':'132'},
	                	{'value':'136','text':'136'},
	                	{'value':'140','text':'140'}
	                ]
	            },
	            'g5Zone_18':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_18':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            'g5Zone_17':{
	     	'items':[
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'100','text':'100'},
	                	{'value':'104','text':'104'},
	                	{'value':'108','text':'108'},
	                	{'value':'112','text':'112'},
	                	{'value':'116','text':'116'},
	                	{'value':'120','text':'120'},
	                	{'value':'124','text':'124'},
	                	{'value':'128','text':'128'},
	                	{'value':'132','text':'132'},
	                	{'value':'136','text':'136'},
	                	{'value':'140','text':'140'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	            // 国家码结束
	     'g5PowerLevel':{
			'items':[
				{'value':'0','text':'{high}'},
				{'value':'1','text':'{in}'},
				{'value':'2','text':'{low}'}
			]
			},
	     'g5Channel':{
	     	'items':[
	                	{'value':'0','text':'auto'},
	                	{'value':'36','text':'36'},
	                	{'value':'40','text':'40'},
	                	{'value':'44','text':'44'},
	                	{'value':'48','text':'48'},
	                	{'value':'52','text':'52'},
	                	{'value':'56','text':'56'},
	                	{'value':'60','text':'60'},
	                	{'value':'64','text':'64'},
	                	{'value':'149','text':'149'},
	                	{'value':'153','text':'153'},
	                	{'value':'157','text':'157'},
	                	{'value':'161','text':'161'},
	                	{'value':'165','text':'165'}
	                ]
	            },
	     'g5Bandwidth':{
	     	'items':[
	                	 {'value':'1','text':'{auto}'},
	                	{'value':'0','text':'20M'},
	                	{'value':'40','text':'40M'}
	                ]
	            },
	    'g5VhtBandwidth':{
	    	'items':[
	                	{'value':'0','text':'20/40M'},
	                	{'value':'1','text':'80M'}
	                ]
	            },
	    'g5PowerMode':{
	    	'items':[
	                	{'value':'0','text':'{auto}'},
	                	{'value':'1','text':'{manual}'}
	                ]
	            },
	    'g5AntiInterferenceLevel':{
	    	'items':[
	                	{'value':'1','text':'1'},
	                	{'value':'2','text':'2'},
	                	{'value':'3','text':'3'},
	                	{'value':'4','text':'4'},
	                	{'value':'5','text':'5'}
	                ]
	            },
	    'g5ChannelSwitchNotification':{
	    	'items':[
	                	{'value':'0','text':'0'},
	                	{'value':'1','text':'1'},
	                	{'value':'2','text':'2'},
	                	{'value':'3','text':'3'},
	                	{'value':'4','text':'4'},
	                	{'value':'5','text':'5'},
	                	{'value':'6','text':'6'},
	                	{'value':'7','text':'7'},
	                	{'value':'8','text':'8'},
	                	{'value':'9','text':'9'}
	                ]
	    },
	    // 无线新增
	    'secType':{
	    	'items':[
	    		{'value':0,'text':'{none}','control':'a'},
	            {'value':1,'text':'WEP','control':'WEB'},
	            {'value':2,'text':'WPA/WPA2','control':'WPA2'},
	            {'value':3,'text':'WPA-PSK/WPA2-PSK','control':'WPA-PSK'}
	    	]
	    },
	    'wepEncryptionMode':{
	    	'items':[
	                	{'value':0,'text':'{auto}'},
	                	{'value':1,'text':'{open_system}'},
	                	{'value':2,'text':'{Shared_key}'}
	                ]
	    },
	    'wepKeyFormat':{
	    	'items':[
	                	{'value':0,'text':'{binary_system16}'},
	                	{'value':1,'text':'{ASCIIcode}'}
	                ]
	    },
	    'wpaVersion':{
	    	'items':[
	                	{'value':0,'text':'{auto}'},
	                	{'value':1,'text':'WPA'},
	                	{'value':2,'text':'WPA2'}
	                ]
	    },
	    'wpaEncryptionMode':{
	    	'items':[
	                	{'value':0,'text':'{auto}'},
	                	{'value':1,'text':'TKIP'},
	                	{'value':2,'text':'AES'}
	                ]
	    },
	    'wpaVersion1':{
	    	'items':[
	                	{'value':0,'text':'{auto}'},
	                	{'value':1,'text':'WPA'},
	                	{'value':2,'text':'WPA2'}
	                ]
	    },
	    'wpaEncryptionMode1':{
	    	'items':[
	                	{'value':0,'text':'{auto}'},
	                	{'value':1,'text':'TKIP'},
	                	{'value':2,'text':'AES'}
	                ]
	            },
	    // 设备列表-导入设备
	    'importDeviec':{
	    	'items':[
	    		{'value':0,'text':'{Single_station_import}','control':'a','sub':'ImportMode'},
	    		{'value':1,'text':'{Multiple_import}','control':'b'},
	    	]
	    },
	    'shopSelect':{
	    	'items':[
	    		{'value':0,'text':'{please_store}'},
	    		{'value':17315085,'text':'冲浪熊意式餐厅(联峰北路店)'},
	    		{'value':17312422,'text':'合肥创新产业园2期-F3栋'},
	    		{'value':17279130,'text':'liyongheng)'},
	    		{'value':17217247,'text':'甘肃路56号'},
	    		{'value':17217012,'text':'123(123)'},
	    		{'value':17090594,'text':'美职篮'},
	    		{'value':17090448,'text':'创业产业园二期','select':'selected'},
	    		{'value':173851,'text':'龙河公园'},
	    		{'value':916734,'text':'501动漫基地'},
	    		{'value':3567707,'text':'星际酒店(北园路店)'},
	    		{'value':2720454,'text':'金龙饭店(立民路)'}
	    	]
	    },
	    'ssidSelect':{
	    	'items':[
	    		{
	    			'value':'basketball',
	    			'text':'basketball'
	    		}
	    	]
	    },
	    // 设备列表-导入设备---中国，美国
	    'ImportMode':{
	    	'items':[
	    		{'value':1,'text':'{ser_no}{+}{ActivationCode}','control':'c','not':'a'},
	    		// {'value':1,'text':'','control':'c','not':'a'},
	    		{'value':2,'text':'{security_code}','control':'d','not':'a'},
	    	]
	    },
	    'ImportMode1':{
	    	'items':[
	    		{'value':1,'text':'{ser_no}{+}{ActivationCode}'},
	    		// {'value':1,'text':'','control':'c','not':'a'},
	    		{'value':2,'text':'{security_code}'},
	    	]
	    },
	    'ImportMode3':{
	    	'items':[
	    		{'value':1,'text':'{ser_no}{+}{ActivationCode}','control':'c','not':'a'}
	    	]
	    },
	    'ImportMode4':{
	    	'items':[
	    		{'value':1,'text':'{ser_no}{+}{ActivationCode}'}
	    	]
	    },
	}