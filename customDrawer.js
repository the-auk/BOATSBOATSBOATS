import { Text, StyleSheet, Animated, Pressable } from "react-native";
import {SvgXml} from "react-native-svg";

const Drawer = () => {
    const SvgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M3.253,57.733c0.022,0.062,0.052,0.116,0.086,0.172c0.032,0.054,0.066,0.104,0.108,0.15  c0.045,0.051,0.097,0.092,0.152,0.132c0.032,0.024,0.053,0.057,0.088,0.077c0.034,0.02,0.071,0.028,0.106,0.043  c0.015,0.007,0.025,0.02,0.041,0.025c8.366,3.078,10.113,10.9,11.802,18.464c1.163,5.206,2.261,10.122,5.625,12.704  c0.182,0.14,0.396,0.207,0.608,0.207c0.3,0,0.597-0.135,0.794-0.392c0.336-0.438,0.253-1.065-0.185-1.401  c-2.788-2.14-3.809-6.713-4.89-11.554c-1.633-7.313-3.485-15.542-11.681-19.32c0.583-0.357,1.478-0.595,2.742-0.125  c0.001,0,0.002,0,0.003,0c0.001,0.001,0.002,0.002,0.004,0.003c3.914,1.431,6.518,4.857,8.562,9.06  c0.021,0.064,0.052,0.121,0.086,0.18c1.434,2.988,2.596,6.353,3.736,9.677c2.058,5.996,4.001,11.659,7.48,14.608  c0.188,0.159,0.417,0.237,0.646,0.237c0.284,0,0.565-0.12,0.763-0.354c0.357-0.421,0.305-1.053-0.116-1.409  c-0.483-0.41-0.934-0.896-1.362-1.438h30.702c0.553,0,1-0.447,1-1s-0.447-1-1-1H27.115c-1.604-2.797-2.87-6.473-4.181-10.295  c-0.169-0.492-0.34-0.989-0.512-1.488h22.067c0.142,0.077,0.297,0.133,0.47,0.133s0.328-0.056,0.47-0.133h40.395  c0.553,0,1-0.447,1-1s-0.447-1-1-1h-3.378v-4.705c0-2.819-2.294-5.113-5.113-5.113s-5.113,2.294-5.113,5.113v4.705h-9.951  c1.651-1.419,3.145-3.389,4.607-5.324c2.454-3.246,4.991-6.603,7.804-6.603h16.527c-0.947,12.021-4.89,20.836-7.671,25.71H69.371  c-0.553,0-1,0.447-1,1s0.447,1,1,1h12.957c-0.973,1.52-1.628,2.327-1.652,2.357c-0.353,0.425-0.294,1.056,0.131,1.408  c0.188,0.154,0.413,0.23,0.639,0.23c0.287,0,0.571-0.123,0.769-0.36c0.405-0.487,9.802-12.02,11.061-32.333  c0-0.005,0.003-0.008,0.003-0.013c0-0.002-0.001-0.004-0.001-0.007c0.015-0.249,0.035-0.492,0.048-0.744  c0-0.01-0.004-0.018-0.004-0.026s0.005-0.016,0.005-0.024c0-0.487,0.184-0.708,0.343-0.845c0.545-0.47,1.613-0.562,2.423-0.546  c-0.22,17.631-6.586,30.667-6.651,30.799c-0.245,0.495-0.044,1.095,0.45,1.341c0.144,0.071,0.295,0.104,0.444,0.104  c0.368,0,0.722-0.203,0.896-0.555c0.28-0.563,6.871-14.023,6.871-32.618c0-0.045-0.02-0.082-0.025-0.125  c-0.009-0.065-0.018-0.128-0.038-0.189c-0.021-0.063-0.051-0.119-0.083-0.177c-0.031-0.054-0.063-0.104-0.103-0.151  c-0.043-0.05-0.091-0.091-0.143-0.132c-0.049-0.038-0.097-0.073-0.153-0.103c-0.06-0.031-0.123-0.051-0.189-0.069  c-0.04-0.012-0.072-0.035-0.114-0.042c-0.327-0.05-3.262-0.45-4.886,0.943c-0.633,0.543-0.976,1.292-1.022,2.166h-7.309  l-2.998-4.847v-9.285h7.175c0.553,0,1-0.448,1-1s-0.447-1-1-1h-1.464c-1.159-1.799-5.459-9.55-0.317-18.74  c0.009-0.017,0.009-0.035,0.017-0.052c0.029-0.059,0.043-0.123,0.061-0.188c0.017-0.066,0.036-0.13,0.039-0.197  c0.001-0.019,0.011-0.034,0.011-0.052c0-0.045-0.02-0.083-0.025-0.126c-0.01-0.069-0.018-0.136-0.041-0.202  c-0.021-0.062-0.053-0.115-0.086-0.171c-0.032-0.054-0.063-0.106-0.104-0.155c-0.047-0.053-0.102-0.094-0.158-0.136  c-0.034-0.026-0.058-0.062-0.097-0.083c-0.016-0.009-0.034-0.008-0.051-0.016c-0.06-0.03-0.123-0.044-0.188-0.061  c-0.066-0.018-0.13-0.037-0.197-0.04c-0.019-0.001-0.033-0.01-0.052-0.01h-5.104V7.622h9.326l-1.447,4.755  c-0.634,1.562-4.047,1.305-5.199,1.09c-0.539-0.1-1.064,0.256-1.167,0.798c-0.102,0.542,0.255,1.064,0.797,1.167  c0.234,0.044,1.165,0.206,2.304,0.206c1.874,0,4.313-0.437,5.137-2.549c0.004-0.01,0.002-0.021,0.006-0.032  c0.005-0.014,0.015-0.025,0.02-0.04l1.858-6.104c0.015-0.05,0.007-0.099,0.015-0.149c0.007-0.049,0.028-0.092,0.028-0.143  c0-0.018-0.01-0.033-0.011-0.051c-0.003-0.071-0.022-0.136-0.04-0.203c-0.017-0.06-0.027-0.12-0.054-0.175  C92,6.137,91.96,6.09,91.923,6.039c-0.039-0.053-0.073-0.105-0.122-0.15c-0.043-0.04-0.096-0.067-0.146-0.099  c-0.061-0.038-0.118-0.076-0.187-0.1c-0.017-0.006-0.027-0.019-0.045-0.024c-0.05-0.015-0.099-0.007-0.148-0.015  c-0.048-0.007-0.092-0.029-0.143-0.029H78.395c-2.681,0-3.654,2.264-3.654,3.786v12.002h-0.062c-5.357,0-6.267,8.757-6.303,9.13  c-0.054,0.549,0.349,1.038,0.898,1.091c0.032,0.003,0.065,0.004,0.098,0.004c0.509,0,0.943-0.386,0.994-0.902  c0.008-0.073,0.818-7.324,4.313-7.324h9.25c-3.834,8.185-1.116,15.197,0.515,18.229h-7.111c-0.553,0-1,0.448-1,1s0.447,1,1,1h1.706  v6.051L64.04,25.441c0.052-0.209,0.087-0.425,0.087-0.65c0-1.498-1.219-2.716-2.716-2.716H41.773c-0.032,0-0.06,0.016-0.091,0.019  c-0.066,0.006-0.129,0.02-0.195,0.039c-0.067,0.021-0.128,0.045-0.188,0.078c-0.027,0.015-0.058,0.018-0.084,0.035  c-4.187,2.82-6.377,7.427-7.422,12.415L23.089,57.545c-0.234,0.5-0.018,1.096,0.482,1.33c0.137,0.063,0.281,0.094,0.423,0.094  c0.376,0,0.736-0.213,0.906-0.576l8.123-17.366c-0.384,8.581,1.528,16.58,1.676,17.182c0.112,0.456,0.521,0.761,0.97,0.761  c0.079,0,0.16-0.01,0.24-0.029c0.536-0.132,0.864-0.674,0.732-1.21c-0.016-0.064-0.415-1.729-0.814-4.311  c2.269-3.694,4.915-5.724,7.874-6.009c0.086-0.008,0.171-0.002,0.257-0.008v24.295H38.13v-5.033h0.459  c1.686,0,3.057-1.371,3.057-3.056c0-1.686-1.371-3.057-3.057-3.057H16.301c-1.827-2.482-4.07-4.454-6.95-5.509  c-0.002-0.001-0.004-0.002-0.007-0.003c-0.001-0.001-0.003,0-0.004-0.001c-3.25-1.209-5.365,0.688-6.029,1.862  c-0.014,0.024-0.014,0.053-0.025,0.078s-0.033,0.043-0.043,0.069c-0.014,0.039-0.009,0.078-0.018,0.118  c-0.016,0.065-0.028,0.129-0.03,0.195c-0.002,0.065,0.004,0.126,0.015,0.189S3.231,57.674,3.253,57.733z M74.219,66.992  c0-1.717,1.396-3.113,3.113-3.113s3.113,1.396,3.113,3.113v4.705h-6.227V66.992z M78.455,21.411H76.74V9.416  c0.007-0.421,0.145-1.793,1.654-1.793h0.061V21.411z M49.929,71.697h-3.97V47.522c1.442,0.258,2.793,0.843,3.97,1.529V71.697z   M58.125,71.697h-6.196V50.405c0.993,0.771,1.709,1.47,2.032,1.804c2.148,10.188,7.179,13.947,9.595,15.192  C61.823,69.555,60.029,71.372,58.125,71.697z M72.201,42.438c-0.485,0.32-1.277,0.655-2.309,0.401  c-0.534-0.128-1.078,0.196-1.209,0.733c-0.132,0.536,0.196,1.078,0.732,1.209c0.425,0.104,0.826,0.149,1.203,0.149  c1.113,0,2.008-0.391,2.633-0.793l8.432,13.633h-7.005c-0.303,0-0.598,0.031-0.889,0.077l-2.189-4.795  c0.223,0.026,0.446,0.043,0.666,0.043c1.772,0,3.363-0.765,3.472-0.818c0.496-0.243,0.7-0.843,0.457-1.338  c-0.242-0.495-0.841-0.701-1.338-0.457c-0.03,0.015-3.072,1.446-4.452-0.122c0,0-0.001,0-0.001-0.001  c-0.015-0.017-0.036-0.025-0.052-0.041l-3.566-7.808c-0.005-0.023-0.003-0.044-0.008-0.067c-0.034-0.169-0.118-0.309-0.221-0.433  l-1.267-2.773c0.329,0.058,0.649,0.096,0.952,0.096c1.389,0,2.494-0.563,3.272-1.237L72.201,42.438z M63.096,40.066  c0.098-0.073,0.176-0.164,0.264-0.246l1.487,3.257c0.075,0.607-0.024,1.131-0.328,1.583c-0.466,0.695-1.277,1.108-1.893,1.341  l-1.846-5.146C61.519,40.798,62.377,40.604,63.096,40.066z M60.069,38.875l-1.706-4.755c0.184,0.024,0.371,0.042,0.562,0.042  c0.389,0,0.785-0.06,1.163-0.212c0.148-0.06,0.311-0.143,0.475-0.252l1.814,3.973c-0.104,0.443-0.312,0.667-0.476,0.792  C61.406,38.835,60.631,38.896,60.069,38.875z M66.117,45.858l2.492,5.457c-0.107,0.808-0.388,1.389-0.875,1.743  c-0.702,0.509-1.746,0.513-2.422,0.429l-2.011-5.604C64.172,47.555,65.353,46.939,66.117,45.858z M66.098,32.571l2.343,3.787  c-0.604,0.636-2,1.581-4.294,0.373l-1.523-3.334c0.326,0.059,0.664,0.099,1.01,0.099c0.518,0,1.043-0.082,1.535-0.294  C65.458,33.076,65.787,32.875,66.098,32.571z M64.971,30.749c-0.184,0.385-0.417,0.539-0.594,0.616  c-0.826,0.359-2.181-0.094-2.863-0.396l-1.58-3.461h1.478c0.485,0,0.936-0.139,1.331-0.363L64.971,30.749z M56.805,24.075h4.606  c0.395,0,0.716,0.321,0.716,0.716s-0.321,0.717-0.716,0.717h-3.061c-0.001,0-0.003,0-0.005,0h-1.803  C56.627,25.034,56.713,24.56,56.805,24.075z M56.2,27.508h1.535l1.948,4.264c-0.132,0.233-0.275,0.295-0.341,0.321  c-0.478,0.195-1.288-0.053-1.81-0.286l-1.396-3.892C56.159,27.779,56.178,27.646,56.2,27.508z M55.547,32.194l9.965,27.772  c0.146,0.408,0.531,0.662,0.941,0.662c0.112,0,0.227-0.019,0.338-0.059c0.52-0.187,0.79-0.76,0.604-1.279l-1.352-3.768  c0.881-0.009,1.951-0.186,2.854-0.837c0.337-0.243,0.609-0.546,0.851-0.877l2.131,4.666c-2.484,1.256-4.567,4.005-6.599,6.692  c-0.155,0.205-0.31,0.41-0.466,0.614C62.258,64.573,52.521,58.183,55.547,32.194z M43.52,45.418  c-3.039,0.289-5.746,2.002-8.087,5.054c-0.928-8.17-0.963-20.996,6.673-26.398h12.666c-0.244,1.304-0.46,2.569-0.651,3.797  c-0.003,0.03-0.012,0.058-0.013,0.088c-1.357,8.777-1.409,15.67-0.695,21.051C51.194,47.236,47.563,45.033,43.52,45.418z   M23.791,71.697h-2.075c-0.61-1.699-1.264-3.396-1.99-5.033h4.065V71.697z M27.373,71.697h-1.583v-5.033h1.583V71.697z   M32.149,71.697h-2.776v-5.033h2.776V71.697z M36.13,71.697h-1.98v-5.033h1.98V71.697z M38.589,62.552  c0.583,0,1.057,0.474,1.057,1.057c0,0.582-0.474,1.056-1.057,1.056H18.785c-0.367-0.728-0.759-1.43-1.168-2.112H38.589z"/><path d="M63.136,85.48c-0.553,0-1,0.447-1,1s0.447,1,1,1h2.521c0.553,0,1-0.447,1-1s-0.447-1-1-1H63.136z"/><path d="M30.557,79.693c0,2.088,1.699,3.787,3.787,3.787s3.786-1.699,3.786-3.787s-1.698-3.786-3.786-3.786  S30.557,77.605,30.557,79.693z M36.13,79.693c0,0.985-0.801,1.787-1.786,1.787c-0.985,0-1.787-0.802-1.787-1.787  s0.801-1.786,1.787-1.786C35.329,77.907,36.13,78.708,36.13,79.693z"/><path d="M78.898,79.693c0-2.088-1.698-3.786-3.786-3.786s-3.786,1.698-3.786,3.786s1.698,3.787,3.786,3.787  S78.898,81.781,78.898,79.693z M73.326,79.693c0-0.985,0.801-1.786,1.786-1.786s1.786,0.801,1.786,1.786s-0.801,1.787-1.786,1.787  S73.326,80.679,73.326,79.693z"/><path d="M51.123,79.693c0,2.088,1.698,3.787,3.786,3.787s3.786-1.699,3.786-3.787s-1.698-3.786-3.786-3.786  S51.123,77.605,51.123,79.693z M56.695,79.693c0,0.985-0.801,1.787-1.786,1.787s-1.786-0.802-1.786-1.787s0.801-1.786,1.786-1.786  S56.695,78.708,56.695,79.693z"/><path d="M43.013,21.421c0.552,0,1-0.448,1-1c0-3.703,0.995-13.539,5.503-14.922h8.765c-0.371,0.689-0.678,1.396-0.924,2.113  c-0.006,0.012-0.009,0.024-0.014,0.037c-2.073,6.083-0.026,12.737,0.081,13.075c0.136,0.426,0.528,0.698,0.953,0.698  c0.1,0,0.202-0.016,0.303-0.047c0.526-0.167,0.817-0.729,0.65-1.256c-0.023-0.072-1.784-5.798-0.311-11.103h4.106  c1.521,0,2.758-1.237,2.758-2.758c0-1.521-1.237-2.758-2.758-2.758h-13.79c-0.048,0-0.089,0.021-0.135,0.027  c-0.044,0.006-0.088-0.003-0.133,0.009c-6.976,1.939-7.056,16.276-7.056,16.885C42.013,20.973,42.46,21.421,43.013,21.421z   M60.623,5.499h2.504c0.418,0,0.758,0.34,0.758,0.758s-0.34,0.758-0.758,0.758h-3.365C60.006,6.494,60.292,5.988,60.623,5.499z"/><path d="M97.319,94.402c-0.058,0.009-5.698,0.991-7.374-3.48c-0.008-0.022-0.026-0.036-0.036-0.058  c-0.026-0.058-0.063-0.108-0.101-0.162c-0.042-0.058-0.082-0.113-0.134-0.16c-0.016-0.014-0.022-0.033-0.039-0.047  c-0.031-0.025-0.069-0.033-0.104-0.054c-0.06-0.037-0.116-0.071-0.183-0.096c-0.062-0.022-0.123-0.034-0.188-0.045  c-0.061-0.01-0.12-0.018-0.183-0.016c-0.069,0.002-0.134,0.016-0.201,0.032c-0.04,0.009-0.081,0.004-0.12,0.019  c-0.021,0.008-0.035,0.025-0.057,0.035c-0.06,0.027-0.112,0.065-0.167,0.104c-0.055,0.04-0.108,0.078-0.153,0.127  c-0.016,0.017-0.036,0.024-0.051,0.042c-0.026,0.032-2.649,3.226-5.964,3.226c-0.003,0-0.007,0-0.01,0  c-1.915-0.004-3.756-1.089-5.472-3.224c-0.024-0.03-0.06-0.045-0.087-0.072c-0.024-0.024-0.037-0.057-0.065-0.079  c-0.023-0.019-0.052-0.023-0.076-0.04c-0.062-0.041-0.123-0.072-0.19-0.099c-0.055-0.021-0.108-0.04-0.165-0.052  c-0.067-0.014-0.132-0.018-0.2-0.018c-0.062,0.001-0.119,0.004-0.18,0.016c-0.063,0.012-0.121,0.031-0.182,0.056  c-0.063,0.025-0.121,0.055-0.179,0.093c-0.026,0.018-0.057,0.022-0.081,0.042c-0.028,0.023-0.042,0.056-0.067,0.081  c-0.027,0.026-0.061,0.041-0.085,0.07c-0.026,0.032-2.649,3.226-5.964,3.226c-0.003,0-0.007,0-0.01,0  c-1.915-0.004-3.756-1.089-5.472-3.224c-0.024-0.031-0.06-0.046-0.087-0.072c-0.024-0.025-0.038-0.057-0.065-0.079  c-0.023-0.019-0.052-0.023-0.076-0.04c-0.061-0.041-0.122-0.072-0.189-0.099c-0.056-0.021-0.108-0.04-0.166-0.052  c-0.066-0.014-0.132-0.018-0.199-0.018c-0.062,0.001-0.12,0.004-0.181,0.016c-0.063,0.012-0.121,0.031-0.182,0.056  c-0.063,0.025-0.121,0.055-0.179,0.093c-0.026,0.018-0.057,0.022-0.081,0.042c-0.028,0.023-0.042,0.056-0.067,0.081  c-0.027,0.026-0.061,0.041-0.085,0.07c-0.026,0.032-2.649,3.226-5.964,3.226c-0.003,0-0.007,0-0.01,0  c-1.915-0.004-3.756-1.089-5.471-3.224c-0.024-0.029-0.058-0.044-0.084-0.07c-0.026-0.025-0.04-0.06-0.069-0.083  c-0.024-0.02-0.054-0.024-0.08-0.041c-0.059-0.039-0.118-0.069-0.183-0.095c-0.058-0.023-0.114-0.042-0.174-0.054  c-0.063-0.013-0.125-0.017-0.19-0.017c-0.064,0-0.126,0.004-0.189,0.017c-0.061,0.012-0.117,0.031-0.175,0.054  c-0.064,0.025-0.123,0.056-0.182,0.094c-0.025,0.018-0.056,0.022-0.08,0.042c-0.029,0.023-0.043,0.058-0.069,0.083  c-0.026,0.026-0.06,0.041-0.084,0.07c-0.026,0.032-2.628,3.224-5.962,3.224c-1.919,0-3.763-1.085-5.481-3.224  c-0.024-0.029-0.058-0.044-0.084-0.07c-0.026-0.025-0.04-0.06-0.069-0.083c-0.024-0.02-0.055-0.024-0.08-0.042  c-0.059-0.038-0.118-0.068-0.182-0.094c-0.059-0.022-0.115-0.042-0.175-0.054c-0.063-0.013-0.125-0.017-0.189-0.017  c-0.065,0-0.126,0.004-0.189,0.017c-0.061,0.012-0.117,0.031-0.176,0.054c-0.063,0.025-0.123,0.056-0.181,0.094  c-0.025,0.018-0.056,0.022-0.08,0.042c-0.029,0.023-0.043,0.058-0.069,0.083c-0.026,0.026-0.06,0.041-0.084,0.07  c-0.026,0.032-2.628,3.224-5.962,3.224c-1.918,0-3.763-1.085-5.48-3.224c-0.024-0.029-0.058-0.044-0.084-0.07  c-0.026-0.025-0.04-0.06-0.069-0.083c-0.024-0.02-0.054-0.024-0.08-0.041c-0.059-0.039-0.118-0.069-0.182-0.095  c-0.058-0.023-0.115-0.042-0.175-0.054c-0.063-0.013-0.125-0.017-0.189-0.017s-0.126,0.004-0.189,0.017  c-0.061,0.012-0.117,0.031-0.175,0.054c-0.064,0.025-0.124,0.056-0.182,0.095c-0.025,0.017-0.055,0.021-0.079,0.041  c-0.029,0.023-0.043,0.057-0.069,0.082c-0.026,0.026-0.061,0.041-0.085,0.071c-0.026,0.032-2.628,3.224-5.962,3.224  c-1.919,0-3.763-1.085-5.481-3.224c-0.014-0.018-0.035-0.025-0.051-0.042c-0.045-0.05-0.097-0.088-0.152-0.128  c-0.056-0.04-0.108-0.078-0.17-0.105c-0.021-0.01-0.034-0.027-0.056-0.035c-0.038-0.014-0.077-0.009-0.115-0.019  c-0.069-0.017-0.136-0.03-0.207-0.032c-0.062-0.002-0.12,0.006-0.18,0.015c-0.065,0.011-0.127,0.022-0.19,0.046  c-0.063,0.023-0.119,0.056-0.177,0.092c-0.035,0.021-0.075,0.029-0.108,0.056c-0.018,0.015-0.026,0.035-0.042,0.051  c-0.049,0.045-0.087,0.099-0.127,0.153c-0.04,0.055-0.078,0.106-0.104,0.167c-0.01,0.021-0.027,0.035-0.036,0.057  c-1.666,4.441-7.132,3.522-7.376,3.481c-0.547-0.106-1.063,0.261-1.163,0.803c-0.1,0.543,0.26,1.064,0.803,1.164  c0.49,0.09,1.082,0.147,1.731,0.147c2.347,0,5.443-0.759,7.177-3.486c1.85,1.878,3.87,2.84,6.025,2.84  c3.057,0,5.509-1.937,6.714-3.106c1.921,2.06,4.031,3.106,6.289,3.106c3.057,0,5.509-1.937,6.714-3.106  c1.921,2.06,4.032,3.106,6.289,3.106c3.057,0,5.509-1.937,6.713-3.106c1.921,2.06,4.033,3.106,6.29,3.106  c3.058-0.001,5.51-1.938,6.714-3.107c1.921,2.061,4.032,3.107,6.289,3.107c3.058-0.001,5.51-1.938,6.714-3.107  c1.921,2.061,4.032,3.107,6.289,3.107c2.868-0.001,5.204-1.706,6.478-2.884c1.728,2.765,4.845,3.53,7.206,3.53  c0.648,0,1.241-0.058,1.73-0.147c0.543-0.1,0.902-0.621,0.803-1.164C98.385,94.662,97.871,94.301,97.319,94.402z"/></svg>`
    const SvgMarkup2 = `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="translate(0,-952.36218)"><path d="m 78.840934,986.36043 0,0.9958 c 0.003,0.3505 -0.19604,0.696 -0.50238,0.8713 l -6.90773,4.1077 c 1.82805,0 3.67389,0 5.49473,0 0.1696,0.021 0.33343,0.086 0.47099,0.1867 l 3.01428,1.9917 c 0.65668,0.4384 0.40153,1.6607 -0.37679,1.8049 l -10.23599,1.836 0,1.8049 2.5119,3.32977 12.5595,0 c 0.26972,0 0.53673,0.1171 0.72217,0.3112 l 4.709808,4.6679 4.61562,0 c 0.52607,0 1.00471,0.4744 1.00476,0.9958 l 0,1.9916 c -5e-5,0.5214 -0.47869,0.9958 -1.00476,0.9958 l -3.32827,0 -1.664128,4.1077 c -0.92684,-0.074 -1.89479,-0.4113 -2.95148,-1.1202 l 1.22455,0 1.75833,-4.3567 c 0.122298,-0.3161 0.417798,-0.5602 0.753568,-0.6224 l -0.816368,0 c -0.26532,0.01 -0.53149,-0.097 -0.72217,-0.2801 l -4.74121,-4.699 -12.6223,0 c -0.31058,0.01 -0.6223,-0.1329 -0.81637,-0.3734 l -3.01428,-3.9833 c -0.13003,-0.1791 -0.19749,-0.4019 -0.18839,-0.6224 l 0,-2.98737 c 0.006,-0.4543 0.36608,-0.8795 0.81636,-0.9647 l 8.60326,-1.5559 -0.72217,-0.4668 -18.33687,0 6.34255,6.28597 c 0.53437,0.5597 0.0553,1.6746 -0.72217,1.6805 l -35.76319,0 -19.1218399,2.8007 c 0.56138,1.8601 1.9562199,3.6389 4.0818399,5.2591 1.37764,1.0501 2.93504,2.0096 4.49002,2.9252 -0.48864,0.019 -0.96762,0.2228 -1.31875,0.5602 -0.23484,0.2327 -0.44187,0.3977 -0.65937,0.5913 -1.27738,-0.7815 -2.55189,-1.6178 -3.73645,-2.5207 -2.6579899,-2.026 -4.9058599,-4.4317 -5.2435899,-7.4997 -0.0537,-0.5034 0.3429,-1.0129 0.84776,-1.0892 l 1.97812,-0.2801 -1.13035,-2.2405 -2.70029,0 c -0.12538,0 -0.25137,-0.042 -0.34539,-0.1245 l -2.00952,-1.99167 c -0.30722,-0.2683 -0.064,-0.8819 0.34539,-0.8713 l 33.3140799,0 c 1.40203,-0.8604 2.84184,-1.7471 4.23883,-2.5829 2.32282,-1.8516 5.47608,-2.8941 8.69745,-2.8941 l 12.7793,0 14.88301,-6.8773 c 0.15567,-0.073 0.33055,-0.1056 0.50238,-0.093 0.64292,0 0.94156,0.4317 0.94201,0.9958 z m -33.15709,8.9623 -0.91056,0 c -0.44777,-0.01 -5.38755,3.2459 -8.19508,4.97897 l 9.10564,0 z m -10.51858,3.4853 -8.88585,0 0.56518,1.64927 c 2.40669,-0.4097 4.94408,-0.72607 7.41011,-1.08907 z m -9.92201,0 -9.9534,0 1.25595,3.17417 9.29403,-1.3693 z m -11.05236,0 -9.5138199,0 1.00476,0.9958 8.9172499,0 z m 0.81637,1.99167 -5.7145699,0 1.0675499,2.0849 5.1808,-0.7779 z m 69.57964,13.7546 c 1.89111,1.8743 3.65102,2.6943 5.36919,2.8008 1.718168,0.1064 3.488268,-0.5002 5.369188,-1.8983 0.41141,-0.3822 1.15606,-0.3166 1.49298,0.1316 0.33692,0.4481 0.18737,1.1741 -0.29983,1.4555 -2.13813,1.5893 -4.38707,2.4453 -6.687938,2.3028 -2.03701,-0.1262 -4.02693,-1.16 -5.93436,-2.8319 -1.84429,1.6655 -3.65789,2.7074 -5.55758,2.7074 -1.89302,0 -3.68878,-1.0528 -5.52618,-2.7074 -1.83741,1.6546 -3.63316,2.7074 -5.52618,2.7074 -1.89302,0 -3.68878,-1.0528 -5.52618,-2.7074 -1.83741,1.6546 -3.63317,2.7074 -5.52618,2.7074 -1.89302,0 -3.68878,-1.0528 -5.52619,-2.7074 -1.8374,1.6546 -3.63316,2.7074 -5.52618,2.7074 -1.89302,0 -3.68877,-1.0528 -5.52618,-2.7074 -1.8374,1.6546 -3.63316,2.7074 -5.52618,2.7074 -1.89302,0 -3.68877,-1.0528 -5.52618,-2.7074 -1.8374,1.6546 -3.63316,2.7074 -5.52618,2.7074 -1.89302,0 -3.68878,-1.0528 -5.52618,-2.7074 -1.83741,1.6546 -3.63316,2.7074 -5.52618,2.7074 -2.1410999,0 -4.1500199,-1.1879 -6.2483599,-3.2675 -0.37008,-0.3747 -0.36269,-1.0495 0.0155,-1.4161 0.3782,-0.3667 1.05899,-0.3592 1.42885,0.016 1.92071,1.9036 3.4284399,2.6762 4.8040099,2.6762 1.37556,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.0708,-0.3827 1.44434,0 1.92071,1.9036 3.42844,2.6762 4.80401,2.6762 1.37557,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.0708,-0.3827 1.44434,0 1.92071,1.9036 3.42844,2.6762 4.80401,2.6762 1.37557,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.0708,-0.3827 1.44434,0 1.92071,1.9036 3.42845,2.6762 4.80401,2.6762 1.37557,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.07081,-0.3827 1.44435,0 1.9207,1.9036 3.42844,2.6762 4.804,2.6762 1.37557,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.07081,-0.3827 1.44435,0 1.92071,1.9036 3.42844,2.6762 4.80401,2.6762 1.37556,0 2.8833,-0.7726 4.80401,-2.6762 0.37354,-0.3827 1.0708,-0.3827 1.44434,0 1.92071,1.9036 3.42844,2.6762 4.80401,2.6762 1.37557,0 2.8833,-0.7726 4.80401,-2.6762 0.66851,-0.4387 0.97774,-0.3607 1.44434,0 z m -64.58724,0.2179 c 0.26502,0.1539 0.55999,0.3153 0.81637,0.4668 l 4.74121,0 c -1.01244,0.7264 -1.81192,0.9958 -2.4805,0.9958 -0.79237,0 -1.78206,-0.3903 -3.07708,-1.4626 z m 60.81939,0.4668 c -1.01244,0.7264 -1.81192,0.9958 -2.4805,0.9958 -0.66858,0 -1.46807,-0.2694 -2.4805,-0.9958 z m -11.05236,0 c -1.01244,0.7264 -1.81193,0.9958 -2.4805,0.9958 -0.66858,0 -1.46807,-0.2694 -2.4805,-0.9958 z m -11.05236,0 c -1.01244,0.7264 -1.81193,0.9958 -2.4805,0.9958 -0.66858,0 -1.46807,-0.2694 -2.48051,-0.9958 z m -11.05237,0 c -1.01243,0.7264 -1.81192,0.9958 -2.4805,0.9958 -0.66857,0 -1.46806,-0.2694 -2.4805,-0.9958 z m -11.05236,0 c -1.01243,0.7264 -1.81192,0.9958 -2.4805,0.9958 -0.66858,0 -1.46806,-0.2694 -2.4805,-0.9958 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>`
    const SvgMarkup3 = `<svg version="1.1" x="0px" y="0px" viewBox="125 125 250 250"><g><path d="M249.98,351.3c3.21,0,6.4-0.15,9.56-0.45c30.52-2.86,58.13-19.35,75.16-45.32c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0   c10.85-16.47,16.58-35.67,16.58-55.53c0-55.86-45.44-101.3-101.3-101.3c-55.84,0-101.26,45.44-101.26,101.3   c0,19.86,5.74,39.06,16.58,55.53C184.1,334.19,215.75,351.3,249.98,351.3z M247,345.25c-0.33-0.01-0.65-0.03-0.98-0.05   c-0.66-0.03-1.33-0.05-1.99-0.09c-0.38-0.02-0.76-0.06-1.15-0.09c-0.6-0.04-1.2-0.09-1.8-0.14c-0.41-0.04-0.82-0.09-1.23-0.13   c-0.57-0.06-1.14-0.12-1.7-0.19c-0.42-0.05-0.84-0.12-1.26-0.17c-0.55-0.08-1.1-0.15-1.65-0.23c-0.43-0.07-0.85-0.14-1.27-0.22   c-0.54-0.09-1.08-0.18-1.61-0.28c-0.43-0.08-0.85-0.17-1.28-0.26c-0.53-0.11-1.06-0.21-1.59-0.33c-0.43-0.09-0.85-0.2-1.27-0.3   c-0.52-0.12-1.05-0.24-1.57-0.37c-0.42-0.11-0.84-0.22-1.25-0.33c-0.52-0.14-1.04-0.27-1.56-0.42c-0.42-0.12-0.83-0.25-1.24-0.37   c-0.51-0.15-1.03-0.31-1.54-0.47c-0.41-0.13-0.82-0.27-1.23-0.41c-0.51-0.17-1.02-0.34-1.52-0.51c-0.41-0.14-0.81-0.29-1.21-0.44   c-0.5-0.18-1.01-0.37-1.5-0.56c-0.4-0.15-0.8-0.32-1.2-0.48c-0.5-0.2-0.99-0.4-1.49-0.61c-0.39-0.17-0.79-0.34-1.18-0.51   c-0.49-0.21-0.98-0.43-1.47-0.65c-0.39-0.18-0.78-0.36-1.16-0.55c-0.48-0.23-0.97-0.46-1.45-0.7c-0.38-0.19-0.76-0.39-1.14-0.58   c-0.48-0.24-0.95-0.49-1.43-0.74c-0.38-0.2-0.75-0.41-1.12-0.61c-0.47-0.26-0.94-0.52-1.41-0.79c-0.37-0.21-0.73-0.43-1.1-0.64   c-0.46-0.28-0.93-0.55-1.39-0.84c-0.36-0.22-0.72-0.45-1.07-0.67c-0.46-0.29-0.92-0.58-1.37-0.88c-0.35-0.23-0.7-0.47-1.05-0.7   c-0.45-0.31-0.9-0.61-1.34-0.93c-0.34-0.24-0.69-0.49-1.03-0.74c-0.44-0.32-0.88-0.64-1.32-0.97c-0.34-0.25-0.67-0.51-1.01-0.77   c-0.43-0.33-0.86-0.67-1.29-1.01c-0.33-0.26-0.66-0.53-0.98-0.8c-0.42-0.35-0.84-0.7-1.26-1.05c-0.32-0.27-0.64-0.55-0.96-0.83   c-0.41-0.36-0.82-0.72-1.23-1.09c-0.31-0.28-0.62-0.57-0.93-0.86c-0.4-0.37-0.8-0.75-1.2-1.13c-0.31-0.3-0.61-0.59-0.92-0.89   c-0.39-0.38-0.78-0.77-1.16-1.17c-0.3-0.31-0.6-0.61-0.89-0.93c-0.38-0.4-0.75-0.8-1.12-1.2c-0.29-0.32-0.58-0.64-0.87-0.96   c-0.36-0.41-0.72-0.82-1.08-1.23c-0.29-0.33-0.57-0.66-0.85-1c-0.35-0.42-0.69-0.84-1.04-1.26c-0.28-0.34-0.56-0.69-0.83-1.04   c-0.33-0.42-0.66-0.85-0.99-1.28c-0.27-0.36-0.55-0.72-0.81-1.08c-0.32-0.43-0.63-0.86-0.94-1.3c-0.27-0.37-0.53-0.75-0.8-1.13   c-0.1-0.15-0.2-0.3-0.31-0.45c17.81-25.95,47.03-41.37,78.55-41.37c31.55,0,60.78,15.43,78.59,41.37c-0.1,0.15-0.2,0.3-0.3,0.44   c-0.27,0.39-0.54,0.77-0.82,1.15c-0.3,0.42-0.61,0.85-0.92,1.26c-0.28,0.38-0.56,0.75-0.85,1.12c-0.32,0.41-0.63,0.83-0.95,1.23   c-0.29,0.37-0.58,0.73-0.88,1.09c-0.33,0.4-0.66,0.8-0.99,1.2c-0.3,0.36-0.6,0.71-0.9,1.06c-0.34,0.39-0.68,0.78-1.02,1.17   c-0.31,0.34-0.62,0.69-0.93,1.03c-0.35,0.38-0.7,0.76-1.06,1.13c-0.32,0.33-0.64,0.66-0.96,0.99c-0.36,0.37-0.72,0.73-1.09,1.1   c-0.33,0.32-0.65,0.64-0.98,0.96c-0.37,0.36-0.75,0.71-1.13,1.07c-0.33,0.31-0.67,0.62-1.01,0.92c-0.38,0.35-0.77,0.69-1.16,1.03   c-0.34,0.3-0.68,0.59-1.03,0.89c-0.39,0.33-0.79,0.66-1.19,0.99c-0.35,0.29-0.7,0.57-1.06,0.86c-0.4,0.32-0.81,0.64-1.21,0.95   c-0.36,0.28-0.72,0.55-1.08,0.82c-0.41,0.31-0.83,0.61-1.24,0.91c-0.36,0.26-0.73,0.53-1.1,0.78c-0.42,0.3-0.85,0.59-1.28,0.88   c-0.37,0.25-0.74,0.5-1.11,0.75c-0.43,0.28-0.87,0.56-1.3,0.84c-0.38,0.24-0.76,0.48-1.14,0.72c-0.44,0.27-0.88,0.53-1.32,0.8   c-0.39,0.23-0.77,0.46-1.16,0.68c-0.45,0.26-0.9,0.51-1.35,0.76c-0.39,0.22-0.78,0.43-1.18,0.64c-0.45,0.24-0.91,0.48-1.37,0.71   c-0.4,0.2-0.8,0.41-1.2,0.61c-0.46,0.23-0.93,0.45-1.39,0.67c-0.4,0.19-0.81,0.39-1.22,0.57c-0.47,0.22-0.94,0.42-1.42,0.63   c-0.41,0.18-0.82,0.36-1.23,0.53c-0.48,0.2-0.96,0.39-1.44,0.59c-0.41,0.17-0.83,0.33-1.24,0.5c-0.48,0.19-0.97,0.37-1.46,0.54   c-0.42,0.15-0.84,0.31-1.26,0.46c-0.49,0.17-0.99,0.34-1.48,0.5c-0.42,0.14-0.84,0.28-1.27,0.42c-0.5,0.16-1,0.31-1.51,0.46   c-0.43,0.13-0.85,0.26-1.28,0.38c-0.51,0.14-1.01,0.28-1.52,0.41c-0.43,0.11-0.86,0.23-1.29,0.34c-0.51,0.13-1.03,0.25-1.55,0.37   c-0.43,0.1-0.86,0.21-1.29,0.3c-0.52,0.11-1.05,0.22-1.58,0.32c-0.43,0.09-0.85,0.18-1.28,0.26c-0.53,0.1-1.07,0.19-1.61,0.28   c-0.43,0.07-0.85,0.15-1.28,0.22c-0.54,0.08-1.09,0.16-1.64,0.23c-0.42,0.06-0.85,0.12-1.27,0.18c-0.56,0.07-1.13,0.13-1.7,0.19   c-0.41,0.04-0.82,0.09-1.23,0.13c-0.6,0.06-1.2,0.1-1.8,0.14c-0.38,0.03-0.77,0.06-1.15,0.09c-0.66,0.04-1.32,0.07-1.98,0.09   c-0.33,0.01-0.66,0.04-0.99,0.05c-0.99,0.03-1.99,0.05-2.98,0.05C248.99,345.3,247.99,345.28,247,345.25z M249.98,154.7   c52.55,0,95.3,42.75,95.3,95.3c0,17.17-4.57,33.81-13.23,48.42c-19.05-26.33-49.38-41.92-82.07-41.92   c-32.67,0-62.99,15.59-82.04,41.92c-8.66-14.61-13.23-31.25-13.23-48.42C154.72,197.45,197.45,154.7,249.98,154.7z"/><path d="M232.48,244.19h35.04c6.2,0,11.24-5.04,11.24-11.24v-50.2c0-6.2-5.04-11.24-11.24-11.24h-35.04   c-6.2,0-11.24,5.04-11.24,11.24v50.2C221.24,239.15,226.28,244.19,232.48,244.19z M227.24,182.76c0-2.89,2.35-5.24,5.24-5.24h35.04   c2.89,0,5.24,2.35,5.24,5.24v50.2c0,2.89-2.35,5.24-5.24,5.24h-35.04c-2.89,0-5.24-2.35-5.24-5.24V182.76z"/></g></svg>`
    const SvgOld = () => <SvgXml style={styles.svg} xml={SvgMarkup} width={40} />
    const SvgNew = () => <SvgXml style={styles.svg} xml={SvgMarkup2} width={40} />
    const SvgUser = () => <SvgXml style={styles.svg} xml={SvgMarkup3} width={40} />

  return (
    <Animated.View style={styles.container}>
        <Pressable style={styles.drawerButton}>
            <SvgNew />
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <Pressable style={styles.drawerButton}>
        <SvgOld />
        <Text style={styles.text}>Past Bookings</Text>
      </Pressable>
      <Pressable style={styles.drawerButton}>
        <SvgUser />
        <Text style={styles.text}>Profile</Text>
      </Pressable>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 250,
    backgroundColor: "#ffba08",
    position: "absolute",
    top: 0,
    left: -250,
    paddingBottom: 60,
    justifyContent:'flex-end'
  },
  drawerButton:{
    marginBottom:10,
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    fontSize:18,
    paddingLeft:10
  },
  svg:{
    height:40,
    // backgroundColor:'white'
  },
});
export default Drawer;
