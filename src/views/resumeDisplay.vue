<template>
  <div>
    <div class="body">
      <div style="position: relative">
        <div class="flex-center" style="height: 60px">
          <h2 v-if="data && data.baseInfo">{{ data.baseInfo.name }}</h2>
        </div>
        <div style="text-align: center">
          <el-tag
            size="mini"
            style="margin-right: 15px"
            v-if="data.baseInfo && data.baseInfo.school"
            >{{ data.baseInfo.school }}</el-tag
          >
          <el-tag type="success" size="mini">15k</el-tag>
        </div>
        <div class="flex-center" style="margin-top: 16px">
          <div class="right16" v-if="data.baseInfo.sex.indexOf('女') > -1">
            <svg
              t="1716608056520"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3052"
              width="16"
              height="16"
            >
              <path
                d="M519.658935 673.068396c81.129762 0 157.397796-31.572066 214.762295-88.937588 118.423133-118.421087 118.423133-311.085084 0-429.507194C677.057755 97.259114 600.788697 65.668629 519.658935 65.668629c-81.128739 0-157.39882 31.590486-214.744899 88.954985-118.402667 118.42211-118.402667 311.086108 0 429.507194C362.279558 641.496329 438.548616 673.068396 519.658935 673.068396zM346.474594 196.183148c46.267766-46.266743 107.764376-71.734788 173.184341-71.734788 65.419965 0 126.937041 25.468045 173.203784 71.734788 95.499028 95.500051 95.499028 250.889097 0 346.389148-46.266743 46.245254-107.765399 71.713298-173.203784 71.713298-65.420989 0-126.916575-25.468045-173.184341-71.713298C250.995009 447.072245 250.995009 291.682175 346.474594 196.183148z"
                p-id="3053"
              ></path>
              <path
                d="M793.986861 800.462854 549.061592 800.462854l0.008186-71.2743c0-16.22452-13.164834-29.389354-29.391401-29.389354s-29.389354 13.163811-29.389354 29.389354l-0.007163 71.2743L245.349429 800.462854c-16.225543 0-29.389354 13.163811-29.389354 29.390377s13.163811 29.392424 29.389354 29.392424l244.925269 0-0.00614 71.236438c0 16.22452 13.163811 29.389354 29.390377 29.389354s29.391401-13.163811 29.391401-29.389354l0.007163-71.236438L793.986861 859.245655c16.225543 0 29.391401-13.165858 29.391401-29.392424S810.213427 800.462854 793.986861 800.462854z"
                p-id="3054"
              ></path>
            </svg>
            {{ data.baseInfo.sex }}
          </div>
          <div class="right16" v-if="data.baseInfo.sex.indexOf('男') > -1">
            <svg
              t="1716608071461"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3264"
              width="16"
              height="16"
            >
              <path
                d="M394.927119 361.941356c-65.98176 0-128.025838 25.692149-174.679391 72.346725-96.296183 96.311533-96.296183 253.015527 0.01535 349.310687 46.653553 46.654576 108.682281 72.332399 174.647669 72.332399 65.965387 0 127.994116-25.693172 174.664042-72.346725 96.29516-96.296183 96.29516-252.984828 0-349.295338C522.936585 387.634528 460.90888 361.941356 394.927119 361.941356zM535.774985 749.783615c-37.627992 37.627992-87.658456 58.341756-140.863215 58.341756-53.204759 0-103.220896-20.712741-140.847865-58.325383-77.667917-77.667917-77.667917-204.043163-0.016373-281.712103 37.627992-37.619806 87.659479-58.33971 140.879588-58.33971 53.204759 0 103.219873 20.719904 140.847865 58.33971C613.427552 545.755802 613.427552 672.131047 535.774985 749.783615z"
                p-id="3265"
              ></path>
              <path
                d="M868.171444 135.676076c-4.482081-4.481058-10.565636-7.002484-16.899902-7.002484l-329.066621 0.01535c-13.196557 0-23.902386 10.706853-23.902386 23.902386 0 13.20372 10.706853 23.902386 23.902386 23.902386l305.164235-0.016373 0 305.179584c0 13.204743 10.705829 23.902386 23.902386 23.902386 13.196557 0 23.902386-10.698666 23.902386-23.902386L875.173928 152.575977C875.174951 146.234549 872.653525 140.158157 868.171444 135.676076z"
                p-id="3266"
              ></path>
            </svg>
            {{ data.baseInfo.sex }}
          </div>
          <div class="right16">
            <svg
              t="1716608319396"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4323"
              width="16"
              height="16"
            >
              <path
                d="M319.255273 907.636364H140.241455C122.321455 907.636364 116.363636 901.911273 116.363636 884.736V581.445818c0-17.175273 5.957818-22.900364 23.877819-22.900363h184.971636c5.981091 0 23.877818 17.175273 23.877818 22.900363v303.290182c-5.957818 17.175273-17.92 22.900364-29.835636 22.900364zM605.090909 907.636364h-186.181818c-17.454545 0-23.272727-5.864727-23.272727-23.435637V116.526545C401.454545 98.955636 407.272727 93.090909 418.909091 93.090909h186.181818c5.818182 0 23.272727 5.864727 23.272727 23.435636v773.53891c0 5.841455-11.636364 17.570909-23.272727 17.570909z m301.940364 0h-184.971637c-17.92 0-23.877818-5.748364-23.877818-23.04V395.403636c0-17.291636 5.957818-23.04 23.877818-23.04h184.971637c17.92 0 23.877818 5.748364 23.877818 23.04v489.192728c0 11.52-5.957818 23.04-23.877818 23.04z"
                fill="#CCCCCC"
                p-id="4324"
              ></path>
            </svg>
            {{ data.baseInfo.age ? data.baseInfo.age + "岁" : "未知" }}
          </div>
          <div class="right16">
            <svg
              t="1716608427107"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5385"
              width="16"
              height="16"
            >
              <path
                d="M502.697478 7.767155C302.377139 7.767155 140.170048 170.154877 140.170048 370.294585c0 41.545246 7.044629 81.464809 19.869465 118.674898V489.511378l0.541895 1.083789c6.141471 17.340624 13.547363 34.139354 22.037043 50.215558l0.180632 0.361263 0.180631 0.361263c3.431999 6.322103 7.044629 12.644205 10.837891 18.785677l0.361263 0.541894 0.180631 0.361263 240.05927 415.813724c30.346093 52.383136 106.030693 52.383136 136.196154 0L811.757982 559.957664l1.083789-1.625683 7.767155-13.547363c0.361263-0.541895 0.722526-1.083789 0.903157-1.625683l0.180632-0.541895 0.180631-0.361263c8.850944-16.618098 16.618098-33.958723 22.940201-51.841242l0.541895-1.083789v-0.361263c12.824837-37.21009 19.869466-77.129652 19.869465-118.674898C865.224907 170.154877 702.837185 7.767155 502.697478 7.767155z m0 523.650732c-95.192803 0-172.141824-77.129652-172.141824-172.141824s77.129652-172.141824 172.141824-172.141824 172.141824 77.129652 172.141823 172.141824-77.129652 172.141824-172.141823 172.141824z"
                fill="#333333"
                p-id="5386"
              ></path>
            </svg>
            北京
          </div>
          <div class="right16">
            <svg
              t="1716608471101"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6509"
              width="16"
              height="16"
            >
              <path
                d="M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z"
                fill="#000000"
                p-id="6510"
              ></path>
            </svg>
            {{
              data.baseInfo.yearsOfService
                ? data.baseInfo.yearsOfService + "年工作经验"
                : "未知"
            }}
          </div>
        </div>
        <div class="flex-center" style="margin-top: 16px">
          <div class="right16">
            <svg
              t="1716608567387"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7875"
              width="16"
              height="16"
            >
              <path
                d="M1024 256L512 0 0 256l512 256 409.6-204.8v358.4h51.2V281.6l51.2-25.6z"
                fill="#333333"
                p-id="7876"
              ></path>
              <path
                d="M153.6 390.144V921.6c0 56.32 160.256 102.4 358.4 102.4s358.4-46.08 358.4-102.4V390.144l-358.4 179.2z"
                fill="#333333"
                p-id="7877"
              ></path>
            </svg>
            {{ data.baseInfo.education }}
          </div>
          <div class="right16">
            <svg
              t="1716608610622"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8995"
              width="16"
              height="16"
            >
              <path
                d="M750.455927 947.106726c-0.00921 0 0 0-0.00921 0-15.613606 0-30.163997-2.433422-43.287899-7.242961-15.613606-4.157693-164.16799-47.790446-366.273011-249.9057-195.888436-195.879226-244.293889-349.755826-248.982678-365.964996-18.3356-45.712111-4.922103-109.069091 30.816866-144.797827l76.06235-76.06235c16.918321-16.927531 38.711673-26.239618 61.362556-26.239618 26.230408 0 51.006697 12.537548 67.961858 34.414811l111.530143 143.781684c17.61724 22.707165 19.751856 59.806107 4.88424 84.460624l-55.518454 91.982948c4.00829 14.559601 20.572548 59.162448 84.385922 126.686331 69.75162 66.051345 112.042819 80.722486 125.465526 83.891665l92.439342-55.779398c24.13263-14.597463 62.256926-12.304234 84.460624 4.865821L919.535787 702.738136c20.543895 15.929808 32.718169 38.226626 34.256198 62.769602 1.547239 24.552186-7.708566 48.191582-26.081005 66.554812l-76.06235 76.06235C827.599911 932.173618 788.822746 947.106726 750.455927 947.106726zM260.143878 115.073852c-12.453636 0-24.654516 5.340635-34.367739 15.053857l-76.06235 76.06235c-24.599258 24.608467-34.927487 73.321936-22.101367 104.268762l0.773619 2.246157c0.419556 1.538029 44.639686 155.396209 239.493559 350.259292C569.677631 864.752066 716.031906 902.737192 717.486024 903.100466l2.162246 0.671289c8.92016 3.373841 19.574824 5.154393 30.806633 5.154393 28.178783 0 57.308217-10.906397 74.197886-27.796066l76.06235-76.06235c10.505261-10.505261 15.818267-23.703865 14.979156-37.155225-0.848321-13.459546-7.792477-25.885554-19.556405-35.011398l-143.781684-111.530143c-9.983375-7.737218-30.452569-8.92016-41.340547-2.348488l-103.010095 62.154595-5.406127-0.047072c-5.686513-0.056282-58.323337-3.196809-156.216901-95.934956-88.702228-93.828992-96.04752-149.384285-96.597035-155.414629l-0.559748-6.226818 62.60178-103.728456c6.794753-11.278881 5.676279-30.974455-2.358721-41.340547l-111.530143-143.781684C288.116977 122.045637 274.694269 115.073852 260.143878 115.073852z"
                fill="#272636"
                p-id="8996"
              ></path>
            </svg>
            {{ data.baseInfo.phone }}
          </div>
          <div class="right16">
            <svg
              t="1716608631615"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10109"
              width="16"
              height="16"
            >
              <path
                d="M838.954667 234.666667H170.666667c-3.626667 0-7.168 0.448-10.56 1.322666l323.690666 323.669334a21.333333 21.333333 0 0 0 30.165334 0L838.954667 234.666667z m46.144 14.186666l-260.693334 260.693334 262.933334 262.912c5.44-7.168 8.661333-16.106667 8.661333-25.792V277.333333c0-10.944-4.117333-20.906667-10.88-28.48zM843.861333 789.333333l-249.6-249.621333-50.133333 50.133333a64 64 0 0 1-90.517333 0l-50.112-50.133333L156.373333 786.88c4.48 1.578667 9.28 2.453333 14.314667 2.453333h673.194667zM128.661333 754.218667L373.333333 509.525333 129.578667 265.813333A42.709333 42.709333 0 0 0 128 277.333333v469.333334c0 2.56 0.213333 5.098667 0.661333 7.552zM170.666667 192h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V277.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z"
                fill="#333333"
                p-id="10110"
              ></path>
            </svg>
            {{ data.baseInfo.email }}
          </div>
        </div>
        <img
          :src="data.imgUrl"
          alt="暂无头像"
          style="
            position: absolute;
            top: 20px;
            right: 50px;
            width: 100px;
            height: 100px;
          "
        />
        <!-- <img
          src="https://st-gdx.dancf.com/gaodingx/0/uxms/design/20201020-111922-7d85.png"
          alt="头像"
          style="position: absolute;top: 20px;right: 50px;width: 100px;height: 100px;"
        /> -->
        <el-divider></el-divider>
      </div>
      <div style="margin: 0 24px">
        <el-tabs v-model="activeName">
          <el-tab-pane label="简历解析" name="analysis">
            <div>
              <div class="title">简历信息</div>
              <el-divider></el-divider>
              <div class="lable">
                <span class="label-with-icon">简历完整度 ：</span>
                <span class="label-content">{{ data.count }}</span>
              </div>
              <div class="lable">
                <span class="label-with-icon">简历解析时间 ：</span>
                <span class="label-content"> {{ time() }}</span>
              </div>
            </div>
            <div>
              <div class="title">基本信息</div>
              <el-divider></el-divider>
              <div style="display: flex">
                <div class="lable flex1">
                  <span class="label-with-icon">姓名 ：</span>
                  <span class="label-content" v-if="data && data.baseInfo">{{
                    data.baseInfo.name
                  }}</span>
                </div>
                <div class="lable flex1">
                  <span class="label-with-icon">性别 ：</span>
                  <span class="label-content">
                    {{ data.baseInfo.sex || "未知" }}</span
                  >
                </div>
              </div>
              <div style="display: flex">
                <div class="lable flex1">
                  <span class="label-with-icon">年龄 ：</span>
                  <span class="label-content">{{ data.baseInfo.age }}</span>
                </div>
                <div class="lable flex1">
                  <span class="label-with-icon">出生日期 ：</span>
                  <span class="label-content">出生日期</span>
                </div>
              </div>
              <div style="display: flex">
                <div class="lable flex1">
                  <span class="label-with-icon">工作年限 ：</span>
                  <span class="label-content">23</span>
                </div>
                <div class="lable flex1">
                  <span class="label-with-icon">毕业学校 ：</span>
                  <span class="label-content"> {{ data.baseInfo.school }}</span>
                </div>
              </div>
              <div style="display: flex">
                <div class="lable flex1">
                  <span class="label-with-icon">毕业学校类型 ：</span>
                  <span class="label-content">{{
                    data.baseInfo.schoolType
                  }}</span>
                </div>
                <div class="lable flex1">
                  <span class="label-with-icon">毕业学校排名 ：</span>
                  <span class="label-content">
                    {{ data.baseInfo.schoolRanking }}</span
                  >
                </div>
              </div>
              <div style="display: flex">
                <div class="lable flex1">
                  <span class="label-with-icon">所学专业 ：</span>
                  <span class="label-content">{{
                    data.baseInfo.schoolMajor
                  }}</span>
                </div>
                <div class="lable flex1">
                  <span class="label-with-icon">学历 ：</span>
                  <span class="label-content">
                    {{ data.baseInfo.education }}</span
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="title">教育经历</div>
              <el-divider></el-divider>
              <div>
                <div class="lable">
                  <span class="label-with-icon">{{
                    data.baseInfo.school
                  }}</span>
                </div>
                <div class="lable">
                  <span class="label-with-icon"
                    >{{ data.baseInfo.schoolMajor }} |
                    {{ data.baseInfo.education }} |
                    {{
                      data.baseInfo.schoolText == "是" ? "全日制" : "非全日制"
                    }}</span
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="title">工作经历</div>
              <el-divider></el-divider>
              <div
                v-for="(val, index) in data.workExperiences"
                :key="index"
                style="margin-bottom: 30px"
              >
                <div class="lable">
                  <span class="blue-with-icon"> 时间 ：</span>
                  <span class="label-content">
                    {{ val.startEndTime }}
                  </span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 公司信息 ：</span>
                  <span class="label-content">
                    {{ val.workUnit }}
                  </span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 职位信息 ：</span>
                  <span class="label-content">
                    {{ val.position }}
                  </span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 位置 ：</span>
                  <span class="label-content">
                    {{ val.address }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="title">证书奖项</div>
              <el-divider></el-divider>
              <div
                v-if="index !== 0"
                v-for="(val, index) in data.userCertificates"
                :key="index"
                style="margin-bottom: 30px"
              >
                <div class="lable">
                  <span class="blue-with-icon"> 获取时间 ：</span>
                  <span class="label-content">
                    {{ val.startTime }}
                  </span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 证书名称 ：</span>
                  <span class="label-content">
                    {{ val.name }}
                  </span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 证书等级 ：</span>
                  <span class="label-content">
                    {{ val.grade }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="title">技能列表</div>
              <el-divider></el-divider>
              <div v-for="(val, index) in data.skill" :key="index">
                <div class="lable">
                  <span class="blue-with-icon"> 技能{{ index + 1 }} ：</span>
                  <span class="label-content">
                    {{ val }}
                  </span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="简历画像" name="portrait">
            <div>
              <div class="title">简历亮点</div>
              <el-divider></el-divider>
              <div class="lable">
                <span class="label-with-icon">风险信息 ：</span>
                <el-badge :value="0" class="item" type="primary"> </el-badge>
              </div>
              <div class="lable">
                <span class="label-with-icon">智能评估 ：</span>
                <span class="label-content">
                  综合{{ data.workExperiences.length > 0 ? "工作经历" : ""
                  }}{{ data.educations.length > 0 ? "、教育背景" : "" }}、{{
                    data.prospectWorks.legend > 0 ? "工作年限" : ""
                  }}等因素，该候选人的市场薪资约为
                  {{ maximum(data.prospectWorks) }} /月；</span
                >
              </div>
            </div>
            <div>
              <div class="title">简历标签</div>
              <el-divider></el-divider>
              <div>
                <div class="lable">
                  <span class="label-with-icon"> 基本标签</span>
                </div>
                <div class="lable">
                  <span class="blue-with-icon"> 基本 ：</span>
                  <span class="label-content">
                    <el-tag size="small" class="margin_right_5">
                      {{
                        data.baseInfo.sex ? data.baseInfo.sex : "未知"
                      }}</el-tag
                    >
                    <el-tag
                      size="small"
                      v-if="data.baseInfo.sex"
                      class="margin_right_5"
                    >
                      {{ data.baseInfo.age + "岁" }}</el-tag
                    >
                    <el-tag size="small" class="margin_right_5">
                      {{
                        data.baseInfo.yearsOfService
                          ? data.baseInfo.yearsOfService + "工作年限"
                          : "暂无工作年限"
                      }}</el-tag
                    >
                  </span>
                </div>
                <div class="lable">
                  <span class="label-with-icon">教育标签 ：</span>
                </div>
                <div class="lable" v-if="data.baseInfo.education">
                  <span class="green-with-icon"> 基本 ：</span>
                  <span class="label-content">
                    <el-tag size="small" type="success" class="margin_right_5">
                      {{ data.baseInfo.education + "学历" }}</el-tag
                    >
                  </span>
                </div>
                <div class="lable" v-if="data.baseInfo.schoolMajor">
                  <span class="green-with-icon"> 专业 ：</span>
                  <span class="label-content">
                    <el-tag size="small" type="success" class="margin_right_5">
                      {{ data.baseInfo.schoolMajor }}</el-tag
                    >
                  </span>
                </div>
                <div class="lable" v-if="data.baseInfo.schoolMajor">
                  <span class="green-with-icon"> 学校 ：</span>
                  <span class="label-content">
                    <el-tag size="small" type="success" class="margin_right_5">
                      {{ data.baseInfo.school }}</el-tag
                    >
                  </span>
                </div>
              </div>
              <div>
                <div class="lable">
                  <span class="label-with-icon">职业标签 </span>
                </div>
                <div class="lable" v-if="data.prospectWorks.length > 1">
                  <span class="warning-with-icon"> 职位 ：</span>
                  <span class="label-content">
                    <el-tag
                      size="small"
                      type="warning"
                      class="margin_right_5"
                      :key="index"
                      v-for="(val, index) in data.prospectWorks"
                      v-if="index >= 1"
                    >
                      {{ val.position }}</el-tag
                    >
                  </span>
                </div>
              </div>
              <div>
                <div class="lable">
                  <span class="label-with-icon">技能标签 </span>
                </div>
                <div class="lable" v-if="data.content">
                  <span class="greens-with-icon"> 软素质 ：</span>
                  <span class="label-content">
                    <el-tag size="small" type="danger" class="margin_right_5">
                      {{ data.content }}</el-tag
                    >
                  </span>
                </div>
                <div class="lable" v-if="data.skill.length > 0">
                  <span class="greens-with-icon"> 技能 ：</span>
                  <span class="label-content">
                    <el-tag
                      size="small"
                      type="danger"
                      class="margin_right_5"
                      :key="index"
                      v-for="(val, index) in data.skill"
                    >
                      {{ val }}</el-tag
                    >
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="title">综合评估</div>
              <el-divider></el-divider>
            </div>
            <div ref="chart" style="width: 540px; height: 400px"></div>
          </el-tab-pane>
          <el-tab-pane label="文件下载" name="download">
            <a
              :href="data.wordUrl"
              download="简历解析docx"
              class="el-button el-button--primary"
              style="margin-bottom: 16px"
              >下载文件</a
            >
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "resumeDisplay",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return { activeName: "analysis" };
  },
  // dom节点初次渲染完成的操作
  mounted() {},
  watch: {
    activeName: {
      handler(newVal, oldVal) {
        if (newVal && newVal !== oldVal) this.initChart();
      },
      deep: true, // For deep watching, i.e., observing nested properties
      immediate: true, // Trigger the handler immediately when the property is first defined
    },
  },
  methods: {
    time() {
      let currentDate = new Date();
      let formattedDate =
        currentDate.toISOString().split("T")[0] +
        " " +
        currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      return formattedDate;
    },
    maximum(list) {
      let maxSalary = list.reduce((max, current) => {
        return parseInt(current.salary, 10) > max
          ? parseInt(current.salary, 10)
          : max;
      }, 8000);
      if (list.length > 0) {
        maxSalary += 1000;
      }
      return maxSalary;
    },
    initChart() {
      const chartDom = this.$refs.chart;
      if (!chartDom) return;
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "能力指数",
          position: "top",
        },
        legend: {
          data: [""],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "教育背景", max: 100 },
            { name: "荣誉指数", max: 100 },
            { name: "语言能力", max: 100 },
            { name: "社会能力", max: 100 },
            { name: "管理能力", max: 100 },
            { name: "工作能力", max: 100 },
          ],
        },
        series: [
          {
            name: "能力指数",
            type: "radar",
            data: [
              {
                value: [60, 60, 60, 60, 60, 60],
                name: "能力指数",
              },
            ],
            itemStyle: {
              normal: {
                areaStyle: {
                  color: "rgba(0, 0, 0, 0.1)", // 辅助系列的颜色，用于阴影效果
                },
              },
            },
          },
          // 添加辅助系列，用于绘制阴影
          {
            name: "Shadow",
            type: "radar",
            // 使用与主系列相同的雷达图数据，但值设置为最大值，创建一个全满的雷达图
            data: [
              {
                value: Array.apply(null, { length: 6 }).map(
                  Number.prototype.valueOf,
                  100
                ),
                name: "",
              },
            ],
            silent: true, // 隐藏辅助系列的标记和标签
            itemStyle: {
              normal: {
                color: "transparent", // 不显示辅助系列的颜色，但保留其形状
              },
            },
            areaStyle: {
              normal: {
                // 创建渐变阴影
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(0, 0, 0, 0.1)" }, // 阴影开始颜色
                  { offset: 1, color: "rgba(0, 0, 0, 0)" }, // 阴影结束颜色
                ]),
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
      myChart.resize();
    },
  },
};
</script>

<style>
.body {
  margin: 16px 24px;
  border: 1px solid #dfdfdf;
  h2 {
    text-align: center;
  }
  .title {
    font-weight: 600 !important;
    font-size: 17px;
    text-align: left;
  }
}
.flex-center {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.right16 {
  margin-right: 16px;
}
.lable {
  margin-bottom: 12px;
  color: #556d91 !important;
  .label-with-icon {
    position: relative;
  }
  .label-content {
    color: #161c2d !important;
  }
  .label-with-icon::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #007bff;
    margin-right: 5px;
    vertical-align: middle;
  }
  .blue-with-icon::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #007bff;
    margin-right: 5px;
    vertical-align: middle;
  }
  .green-with-icon::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #11e056;
    margin-right: 5px;
    vertical-align: middle;
  }
  .greens-with-icon::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #dc3545;
    margin-right: 5px;
    vertical-align: middle;
  }
  .warning-with-icon::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #17a2b8;
    margin-right: 5px;
    vertical-align: middle;
  }
}

.flex1 {
  flex: 1;
}
.margin_right_5 {
  margin-right: 5px;
}
</style>
