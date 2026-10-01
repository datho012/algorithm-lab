const lessons = {
  "1": {
    "goal": "Xếp các số từ nhỏ đến lớn; giữ cả số bị lặp.",
    "idea": "Cứ tìm số nhỏ nhất trong phần chưa xếp, đổi nó lên đầu phần đó. Làm xong một lượt là chốt thêm được một vị trí.",
    "trace": [
      "Với 4 1 3: số nhỏ nhất là 1 → đổi chỗ với 4: 1 4 3.",
      "Phần còn lại 4 3: đưa 3 lên trước → 1 3 4.",
      "Dừng khi mọi vị trí đã được chốt."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n; cin >> n;\n    vector<long long> a(n);\n    for (auto &x : a) cin >> x;\n    for (int i=0; i<n; i++) {\n        int smallest=i;\n        for (int j=i+1; j<n; j++)\n            if (a[j]<a[smallest]) smallest=j;\n        swap(a[i],a[smallest]); // Chốt vị trí i\n    }\n    for (auto x : a) cout << x << ' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một số",
        "input": "1\n8",
        "expected": "8"
      },
      {
        "name": "Âm và trùng",
        "input": "5\n0 -2 3 -2 1",
        "expected": "-2 -2 0 1 3"
      }
    ],
    "limit": "Cách chọn từng số mất O(N²), dùng để học và chạy dữ liệu nhỏ. Với N lớn, thay vòng lặp bằng sort(a.begin(), a.end())."
  },
  "2": {
    "goal": "In mỗi giá trị đúng một lần, từ lớn xuống nhỏ.",
    "idea": "Xếp giảm dần trước. Khi in, bỏ qua số giống số đứng ngay trước nó.",
    "trace": [
      "3 1 3 2 → xếp thành 3 3 2 1.",
      "In 3 đầu tiên; bỏ 3 thứ hai; in 2 rồi 1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n; cin >> n; vector<long long> a(n);\n    for(auto &x:a) cin>>x;\n    sort(a.begin(),a.end(),greater<long long>());\n    for(int i=0;i<n;i++)\n        if(i==0 || a[i]!=a[i-1]) cout<<a[i]<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Tất cả giống nhau",
        "input": "3\n2 2 2",
        "expected": "2"
      },
      {
        "name": "Số âm",
        "input": "4\n-3 0 -1 -3",
        "expected": "0 -1 -3"
      }
    ],
    "limit": ""
  },
  "3": {
    "goal": "Xếp theo khoảng cách đến số 0. Nếu bằng nhau, số nhỏ hơn đứng trước.",
    "idea": "So trị tuyệt đối trước; chỉ khi bằng nhau mới so giá trị gốc.",
    "trace": [
      "-3 và 2: ",
      "2",
      " nhỏ hơn ",
      "-3",
      " nên 2 trước.",
      "-2 và 2 có cùng trị tuyệt đối: -2 trước 2."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n; cin>>n; vector<long long>a(n);\n    for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end(),[](long long x,long long y){\n        if(abs(x)!=abs(y)) return abs(x)<abs(y);\n        return x<y;\n    });\n    for(auto x:a)cout<<x<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đối xứng",
        "input": "5\n3 -3 0 2 -2",
        "expected": "0 -2 2 -3 3"
      },
      {
        "name": "Một số",
        "input": "1\n-7",
        "expected": "-7"
      }
    ],
    "limit": ""
  },
  "4": {
    "goal": "Xếp học sinh theo điểm cao trước; cùng điểm thì tên theo thứ tự chữ cái.",
    "idea": "Mỗi học sinh giữ cả tên lẫn điểm. Khi đổi thứ tự, di chuyển cả cặp để không ghép nhầm tên và điểm.",
    "trace": [
      "B 9, A 9, C 10 → C đứng đầu vì 10 lớn nhất.",
      "A và B cùng 9 → A trước B."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n; cin>>n;\n    vector<pair<string,int>> a(n);\n    for(auto &s:a)cin>>s.first>>s.second;\n    sort(a.begin(),a.end(),[](auto x,auto y){\n        if(x.second!=y.second) return x.second>y.second;\n        return x.first<y.first;\n    });\n    for(auto s:a)cout<<s.first<<' '<<s.second<<'\\n';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Cùng điểm",
        "input": "3\nB 9\nA 9\nC 10",
        "expected": "C 10\nA 9\nB 9"
      },
      {
        "name": "Một học sinh",
        "input": "1\nDat 10",
        "expected": "Dat 10"
      }
    ],
    "limit": ""
  },
  "5": {
    "goal": "Tìm giá trị lớn thứ K sau khi bỏ những giá trị trùng.",
    "idea": "Sắp giảm dần, xóa phần tử trùng rồi lấy vị trí K−1. K dùng số thứ tự từ 1; vector dùng chỉ số từ 0.",
    "trace": [
      "9 9 7 5 → các giá trị khác nhau là 9 7 5.",
      "K=2 → đáp án 7, không phải số 9 thứ hai."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<long long>a(n);\n    for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end(),greater<long long>());\n    a.erase(unique(a.begin(),a.end()),a.end());\n    if(k>(int)a.size())cout<<-1;else cout<<a[k-1];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không đủ giá trị",
        "input": "3 2\n4 4 4",
        "expected": "-1"
      },
      {
        "name": "Bỏ số trùng",
        "input": "4 2\n9 9 7 5",
        "expected": "7"
      }
    ],
    "limit": ""
  },
  "6": {
    "goal": "Tìm khoảng cách dương nhỏ nhất giữa hai tọa độ.",
    "idea": "Sau khi sắp xếp, chỉ cần xem các cặp cạnh nhau. Khoảng cách bằng 0 không được chọn.",
    "trace": [
      "1 1 4 9 → các khoảng cách là 0, 3, 5.",
      "Bỏ 0 → nhỏ nhất là 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>a(n);for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end());long long best=numeric_limits<long long>::max();\n    for(int i=1;i<n;i++)if(a[i]>a[i-1])best=min(best,a[i]-a[i-1]);\n    cout<<(best==numeric_limits<long long>::max()?0:best);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Trùng hết",
        "input": "3\n7 7 7",
        "expected": "0"
      },
      {
        "name": "Có tọa độ âm",
        "input": "4\n-5 -5 -1 8",
        "expected": "4"
      }
    ],
    "limit": ""
  },
  "7": {
    "goal": "Ghép mọi số thành một số lớn nhất, không thêm dấu cách.",
    "idea": "Với hai chuỗi a,b, thử cả a+b và b+a. Cách ghép nào lớn hơn sẽ quyết định thứ tự của cặp đó.",
    "trace": [
      "3 và 30: ghép 330 lớn hơn 303 → 3 trước 30.",
      "Nếu tất cả là 0, chỉ in một chữ số 0."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<string>a(n);for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end(),[](string x,string y){return x+y>y+x;});\n    if(a[0]==\"0\")cout<<0;else for(auto x:a)cout<<x;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Toàn số 0",
        "input": "3\n0 0 0",
        "expected": "0"
      },
      {
        "name": "Không so giá trị thường",
        "input": "2\n3 30",
        "expected": "330"
      }
    ],
    "limit": ""
  },
  "8": {
    "goal": "Với mỗi số được hỏi, trả lời nó có xuất hiện trong mảng không.",
    "idea": "Bản dễ hiểu: đi từ đầu đến cuối để tìm. Gặp đúng số thì dừng. Mảng đã sắp xếp nhưng ta chưa cần tận dụng điều đó.",
    "trace": [
      "Mảng 1 3 5, tìm 3: so 1 → chưa đúng, so 3 → YES.",
      "Tìm 4: xem hết vẫn không có → NO."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,q;cin>>n>>q;vector<long long>a(n);for(auto &x:a)cin>>x;\n    while(q--){long long x;cin>>x;bool found=false;\n        for(auto value:a)if(value==x){found=true;break;}\n        cout<<(found?\"YES\":\"NO\")<<'\\n';\n    }\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Có và không có",
        "input": "1 2\n5\n5\n0",
        "expected": "YES\nNO"
      },
      {
        "name": "Giá trị lặp",
        "input": "3 2\n2 2 2\n2\n3",
        "expected": "YES\nNO"
      }
    ],
    "limit": "Bản dễ hiểu O(N×Q). Dữ liệu lớn cần tìm kiếm nhị phân; xem mục tối ưu sau khi đã hiểu vòng lặp."
  },
  "9": {
    "goal": "Tìm vị trí đầu tiên của X. Vị trí đầu mảng là 1; không có thì in −1.",
    "idea": "Duyệt từng phần tử. Gặp X lần đầu thì lưu vị trí rồi dừng ngay.",
    "trace": [
      "Mảng 1 2 2 2 5, X=2.",
      "Các vị trí chứa 2 là 2, 3, 4 → chọn 2.",
      "Trong C++, a[1] là phần tử thứ 2, nên khi in phải cộng 1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long x;cin>>n>>x;vector<long long>a(n);\n    for(auto &v:a)cin>>v;\n    int answer=-1;\n    for(int i=0;i<n;i++){\n        if(a[i]==x){answer=i+1;break;}\n    }\n    cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không tìm thấy",
        "input": "3 4\n1 2 3",
        "expected": "-1"
      },
      {
        "name": "Trùng ở đầu",
        "input": "4 2\n2 2 2 5",
        "expected": "1"
      }
    ],
    "limit": "Bản duyệt O(N), rất phù hợp để bắt đầu. Sau đó học lower_bound / upper_bound để tìm trong O(log N) trên mảng đã lưu."
  },
  "10": {
    "goal": "Tìm vị trí cuối cùng của X. Vị trí đầu mảng là 1; không có thì in −1.",
    "idea": "Duyệt từng phần tử. Mỗi lần gặp X, cập nhật đáp án; đi đến cuối mảng.",
    "trace": [
      "Mảng 1 2 2 2 5, X=2.",
      "Các vị trí chứa 2 là 2, 3, 4 → chọn 4.",
      "Trong C++, a[1] là phần tử thứ 2, nên khi in phải cộng 1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long x;cin>>n>>x;vector<long long>a(n);\n    for(auto &v:a)cin>>v;\n    int answer=-1;\n    for(int i=0;i<n;i++){\n        if(a[i]==x){answer=i+1;}\n    }\n    cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không tìm thấy",
        "input": "3 4\n1 2 3",
        "expected": "-1"
      },
      {
        "name": "Trùng ở đầu",
        "input": "4 2\n2 2 2 5",
        "expected": "3"
      }
    ],
    "limit": "Bản duyệt O(N), rất phù hợp để bắt đầu. Sau đó học lower_bound / upper_bound để tìm trong O(log N) trên mảng đã lưu."
  },
  "11": {
    "goal": "Đếm xem X có xuất hiện bao nhiêu lần.",
    "idea": "Bắt đầu count=0. Mỗi khi đọc được một số bằng X thì tăng count lên 1.",
    "trace": [
      "2 2 5 5 5, X=5 → count lần lượt 0,0,1,2,3.",
      "Không gặp X lần nào → giữ đáp án 0."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long x;cin>>n>>x;int count=0;\n    for(int i=0;i<n;i++){long long value;cin>>value;if(value==x)count++;}\n    cout<<count;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không có",
        "input": "3 4\n1 2 3",
        "expected": "0"
      },
      {
        "name": "Toàn X",
        "input": "4 2\n2 2 2 2",
        "expected": "4"
      }
    ],
    "limit": ""
  },
  "12": {
    "goal": "Chọn số trong mảng gần X nhất; nếu hai số gần như nhau, chọn số nhỏ hơn.",
    "idea": "Giữ một ứng viên best. Với mỗi số mới, so khoảng cách đến X rồi cập nhật nếu tốt hơn.",
    "trace": [
      "X=6, mảng 1 4 8: khoảng cách là 5,2,2.",
      "4 và 8 hòa nhau → lấy 4."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long x;cin>>n>>x;long long best;cin>>best;\n    for(int i=1;i<n;i++){long long v;cin>>v;\n        if(abs(v-x)<abs(best-x)||(abs(v-x)==abs(best-x)&&v<best))best=v;\n    }\n    cout<<best;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hòa khoảng cách",
        "input": "2 6\n4 8",
        "expected": "4"
      },
      {
        "name": "X ngoài mảng",
        "input": "3 20\n1 3 7",
        "expected": "7"
      }
    ],
    "limit": "Duyệt O(N). Khi đã hiểu cách chọn ứng viên, dùng tìm kiếm nhị phân để chỉ xét hai hàng xóm của X."
  },
  "13": {
    "goal": "Tìm số nguyên lớn nhất k sao cho k×k không vượt N.",
    "idea": "Thử số ở giữa một khoảng. Nếu bình phương còn nhỏ, tìm nửa trên; nếu quá lớn, tìm nửa dưới.",
    "trace": [
      "N=27: 5²=25 được, 6²=36 quá lớn → 5.",
      "Dùng k ≤ N/k để tránh phép nhân bị tràn số."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nunsigned long long n;cin>>n;\n    unsigned long long lo=0,hi=1000000000,answer=0;\n    while(lo<=hi){auto mid=(lo+hi)/2;\n        if(mid==0 || mid<=n/mid){answer=mid;lo=mid+1;}\n        else hi=mid-1;\n    }\n    cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Số 0",
        "input": "0",
        "expected": "0"
      },
      {
        "name": "Chính phương lớn",
        "input": "1000000000000000000",
        "expected": "1000000000"
      }
    ],
    "limit": ""
  },
  "14": {
    "goal": "Cắt được ít nhất K miếng bằng nhau. Tìm chiều dài nguyên lớn nhất của một miếng.",
    "idea": "Thử chiều dài L: mỗi bánh dài a cho a/L miếng. Nếu tổng đủ K thì có thể thử L lớn hơn.",
    "trace": [
      "10,15,20 với K=5: L=7 cho 1+2+2=5 miếng.",
      "L=8 chỉ cho 1+1+2=4 → quá dài. Đáp án 7."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long k;cin>>n>>k;vector<long long>a(n);long long hi=0;\n    for(auto &x:a){cin>>x;hi=max(hi,x);}long long lo=1,ans=0;\n    while(lo<=hi){long long mid=lo+(hi-lo)/2,count=0;\n        for(auto x:a){count+=x/mid;if(count>=k)break;}\n        if(count>=k){ans=mid;lo=mid+1;}else hi=mid-1;\n    }\n    cout<<ans;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Cắt nguyên chiếc",
        "input": "2 2\n3 3",
        "expected": "3"
      },
      {
        "name": "Không cắt được theo quy ước",
        "input": "1 10\n3",
        "expected": "0"
      }
    ],
    "limit": "Nếu không có chiều dài dương phù hợp, bài luyện quy ước in 0; PDF chưa nói rõ trường hợp này."
  },
  "15": {
    "goal": "Thay x vào đa thức và tính giá trị của nó.",
    "idea": "Đọc hệ số từ bậc cao xuống thấp. Mỗi lần: lấy kết quả đang có nhân x rồi cộng hệ số mới.",
    "trace": [
      "Hệ số 1,0,−2,5 và x=2.",
      "Bắt đầu 0 → 1 → 2 → 2 → 9. Đây là ((1×2+0)×2−2)×2+5."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long x;cin>>n>>x;long long value=0;\n    for(int i=0;i<=n;i++){long long coefficient;cin>>coefficient;value=value*x+coefficient;}\n    cout<<value;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hằng số",
        "input": "0 9\n7",
        "expected": "7"
      },
      {
        "name": "x bằng 0",
        "input": "2 0\n3 4 5",
        "expected": "5"
      }
    ],
    "limit": ""
  },
  "16": {
    "goal": "Tìm x trong [0,3] làm x³+x−10 bằng 0. Bài không có input.",
    "idea": "Hàm tăng nên giá trị âm nằm bên trái nghiệm, giá trị dương nằm bên phải. Liên tục chia đôi khoảng.",
    "trace": [
      "x=1 → −8, x=3 → 20: nghiệm ở giữa.",
      "x=2 → 8+2−10=0 → nghiệm 2."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble lo=0,hi=3;\n    for(int i=0;i<100;i++){double mid=(lo+hi)/2;\n        if(mid*mid*mid+mid<10)lo=mid;else hi=mid;\n    }\n    cout<<fixed<<setprecision(6)<<(lo+hi)/2;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không cần nhập",
        "input": "",
        "expected": "2.000000"
      }
    ],
    "limit": ""
  },
  "17": {
    "goal": "Ước lượng diện tích dưới đường (x+1)² trên [a,b] bằng N hình chữ nhật.",
    "idea": "Chia đều đoạn thành N phần. Chiều cao mỗi hình lấy tại chính giữa phần đó. Cộng rộng × cao của mọi hình.",
    "trace": [
      "a=0,b=2,N=2 → rộng mỗi hình 1.",
      "Trung điểm 0.5 và 1.5 → diện tích 2.25+6.25=8.5.",
      "N lớn hơn thường cho ước lượng sát hơn; vẫn phải dùng đúng N đề cho."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble a,b;int n;cin>>a>>b>>n;double width=(b-a)/n,total=0;\n    for(int i=0;i<n;i++){double x=a+(i+0.5)*width;total+=(x+1)*(x+1)*width;}\n    cout<<fixed<<setprecision(9)<<total;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai hình chữ nhật",
        "input": "0 2 2",
        "expected": "8.5"
      },
      {
        "name": "Một hình",
        "input": "0 2 1",
        "expected": "8"
      }
    ],
    "limit": ""
  },
  "18": {
    "goal": "Tìm căn bậc hai bằng cách sửa dần một dự đoán.",
    "idea": "Nếu dự đoán x quá lớn thì N/x quá nhỏ. Lấy trung bình hai số để có dự đoán tốt hơn.",
    "trace": [
      "N=4: bắt đầu x=4.",
      "Lần 1: (4+1)/2=2.5; lần 2: (2.5+1.6)/2=2.05.",
      "Lặp đến khi hai dự đoán gần như không đổi → 2."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble n;cin>>n;if(n==0){cout<<fixed<<setprecision(10)<<0.0;return 0;}\n    double x=max(1.0,n);\n    while(true){double next=(x+n/x)/2;if(abs(next-x)<1e-10){x=next;break;}x=next;}\n    cout<<fixed<<setprecision(10)<<x;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Số 0",
        "input": "0",
        "expected": "0"
      },
      {
        "name": "Chính phương",
        "input": "4",
        "expected": "2"
      }
    ],
    "limit": ""
  },
  "19": {
    "goal": "Tìm x không âm sao cho x⁵+3x³+x=K.",
    "idea": "Vế trái tăng khi x tăng. Mở rộng đầu phải đến khi đủ lớn, sau đó chia đôi khoảng.",
    "trace": [
      "K=5: thử x=1 → 1+3+1=5.",
      "Nếu giá trị thử nhỏ hơn K, cần tăng x; ngược lại cần giảm."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble k;cin>>k;auto f=[](double x){return x*x*x*x*x+3*x*x*x+x;};\n    double lo=0,hi=1;while(f(hi)<k)hi*=2;\n    for(int i=0;i<150;i++){double mid=(lo+hi)/2;if(f(mid)<k)lo=mid;else hi=mid;}\n    cout<<fixed<<setprecision(9)<<(lo+hi)/2;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "K bằng 0",
        "input": "0",
        "expected": "0"
      },
      {
        "name": "Nghiệm 2",
        "input": "58",
        "expected": "2"
      }
    ],
    "limit": ""
  },
  "20": {
    "goal": "Tính số Fibonacci thứ N, chỉ giữ phần dư khi chia 1 000 000 007.",
    "idea": "Mỗi số bằng tổng hai số ngay trước nó. Lưu cả dãy để nhìn rõ quy luật trước.",
    "trace": [
      "F1=1,F2=1 → F3=2 → F4=3 → F5=5.",
      "Phép % giúp số không tăng quá lớn."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>f(max(3,n+1),0);f[1]=f[2]=1;\n    for(int i=3;i<=n;i++)f[i]=(f[i-1]+f[i-2])%1000000007;\n    cout<<f[n];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Bắt đầu",
        "input": "1",
        "expected": "1"
      },
      {
        "name": "Số thứ 5",
        "input": "5",
        "expected": "5"
      }
    ],
    "limit": ""
  },
  "21": {
    "goal": "Đếm các cách lên N bậc, mỗi lần bước từ 1 đến 2 bậc.",
    "idea": "Muốn đến bậc i, bước cuối phải xuất phát từ i−1 hoặc i−2. Cộng số cách đến các bậc đó.",
    "trace": [
      "Có 1 cách đứng ở bậc 0: chưa bước gì.",
      "Với N=3: 111,12,21 → 3 cách."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>ways(n+1,0);ways[0]=1;\n    for(int i=1;i<=n;i++)\n        for(int step=1;step<=2 && step<=i;step++)\n            ways[i]=(ways[i]+ways[i-step])%1000000007;\n    cout<<ways[n];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Chưa bước",
        "input": "0",
        "expected": "1"
      },
      {
        "name": "Ba bậc",
        "input": "3",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "22": {
    "goal": "Đếm các cách lên N bậc, mỗi lần bước từ 1 đến 3 bậc.",
    "idea": "Muốn đến bậc i, bước cuối phải xuất phát từ i−1, i−2 hoặc i−3. Cộng số cách đến các bậc đó.",
    "trace": [
      "Có 1 cách đứng ở bậc 0: chưa bước gì.",
      "Với N=3: 111,12,21,3 → 4 cách."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>ways(n+1,0);ways[0]=1;\n    for(int i=1;i<=n;i++)\n        for(int step=1;step<=3 && step<=i;step++)\n            ways[i]=(ways[i]+ways[i-step])%1000000007;\n    cout<<ways[n];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Chưa bước",
        "input": "0",
        "expected": "1"
      },
      {
        "name": "Ba bậc",
        "input": "3",
        "expected": "4"
      }
    ],
    "limit": ""
  },
  "23": {
    "goal": "Chọn các số không nằm cạnh nhau sao cho tổng lớn nhất. Được phép không chọn số nào.",
    "idea": "Đến số thứ i: hoặc bỏ nó, hoặc lấy nó và ghép với kết quả tốt nhất đến i−2. Chọn phương án lớn hơn.",
    "trace": [
      "5 1 2: lấy 5 và 2 được 7, tốt hơn chỉ lấy 1.",
      "Toàn số âm → không lấy gì, tổng 0."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>a(n+1),best(n+1,0);for(int i=1;i<=n;i++)cin>>a[i];\n    for(int i=1;i<=n;i++){long long take=a[i]+(i>=2?best[i-2]:0);best[i]=max(best[i-1],take);}\n    cout<<best[n];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Toàn âm",
        "input": "3\n-3 -1 -2",
        "expected": "0"
      },
      {
        "name": "Bỏ ở giữa",
        "input": "3\n5 1 2",
        "expected": "7"
      }
    ],
    "limit": ""
  },
  "24": {
    "goal": "Dùng ít đồng xu nhất để tạo đúng tổng S. Mỗi loại được dùng nhiều lần.",
    "idea": "Tính lần lượt số xu ít nhất cho tổng 0,1,2,...,S. Với tổng đang xét, thử chọn từng loại xu làm đồng cuối cùng.",
    "trace": [
      "Xu 1,3,4; S=6.",
      "Lấy 4 trước cần 4+1+1 (3 xu); thử mọi loại thấy 3+3 chỉ 2 xu."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint m,s;cin>>m>>s;vector<int>coin(m);for(auto &x:coin)cin>>x;\n    const int INF=1000000000;vector<int>dp(s+1,INF);dp[0]=0;\n    for(int value=1;value<=s;value++)for(int c:coin)\n        if(c<=value)dp[value]=min(dp[value],dp[value-c]+1);\n    cout<<(dp[s]==INF?-1:dp[s]);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không tạo được",
        "input": "2 3\n2 4",
        "expected": "-1"
      },
      {
        "name": "Tổng 0",
        "input": "2 0\n2 3",
        "expected": "0"
      }
    ],
    "limit": ""
  },
  "25": {
    "goal": "Chọn đồ cho balô không quá W, tổng giá trị lớn nhất. Mỗi món chỉ lấy một lần.",
    "idea": "Xét từng món. Với mỗi sức chứa, so không lấy và lấy món đó. Duyệt sức chứa từ lớn xuống để tránh dùng một món hai lần.",
    "trace": [
      "W=5; món (3,4), (2,3) → lấy cả hai: nặng 5, giá trị 7.",
      "Nếu chỉ có món (2,3), W=4 vẫn chỉ được giá trị 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,w;cin>>n>>w;vector<long long>dp(w+1,0);\n    for(int i=0;i<n;i++){int weight;long long value;cin>>weight>>value;\n        for(int capacity=w;capacity>=weight;capacity--)\n            dp[capacity]=max(dp[capacity],dp[capacity-weight]+value);\n    }\n    cout<<dp[w];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Ghép hai món",
        "input": "2 5\n3 4\n2 3",
        "expected": "7"
      },
      {
        "name": "Không dùng lại món",
        "input": "1 4\n2 3",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "26": {
    "goal": "Chọn dãy con tăng nghiêm ngặt dài nhất, giữ nguyên thứ tự các số.",
    "idea": "Với mỗi vị trí i, tìm các số nhỏ hơn nó ở phía trước. Thử nối i vào cuối dãy tốt nhất của mỗi vị trí đó.",
    "trace": [
      "3 1 2 → có dãy 1 2 dài 2.",
      "2 2 2 → không được lấy hai số bằng nhau, độ dài chỉ 1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>a(n);for(auto &x:a)cin>>x;vector<int>dp(n,1);int answer=0;\n    for(int i=0;i<n;i++){for(int j=0;j<i;j++)if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);answer=max(answer,dp[i]);}\n    cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Toàn bằng nhau",
        "input": "3\n2 2 2",
        "expected": "1"
      },
      {
        "name": "Giữ đúng thứ tự",
        "input": "3\n3 1 2",
        "expected": "2"
      }
    ],
    "limit": "Bản dễ hiểu O(N²), chỉ dùng dữ liệu nhỏ. Bản O(N log N) ở phần tối ưu phù hợp giới hạn lớn."
  },
  "27": {
    "goal": "Tìm độ dài chuỗi con chung dài nhất; được bỏ ký tự nhưng không đổi thứ tự.",
    "idea": "Lập bảng cho các đoạn đầu hai chuỗi. Hai ký tự cuối giống nhau thì nối thêm 1; khác nhau thì thử bỏ một ký tự ở một bên.",
    "trace": [
      "ABC và AC → bỏ B, còn AC → độ dài 2.",
      "ABC và XYZ → không có ký tự chung → 0."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nstring a,b;cin>>a>>b;vector<vector<int>>dp(a.size()+1,vector<int>(b.size()+1));\n    for(int i=1;i<=(int)a.size();i++)for(int j=1;j<=(int)b.size();j++){\n        if(a[i-1]==b[j-1])dp[i][j]=dp[i-1][j-1]+1;\n        else dp[i][j]=max(dp[i-1][j],dp[i][j-1]);\n    }\n    cout<<dp[a.size()][b.size()];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Bỏ một ký tự",
        "input": "ABC\nAC",
        "expected": "2"
      },
      {
        "name": "Không chung",
        "input": "ABC\nXYZ",
        "expected": "0"
      }
    ],
    "limit": ""
  },
  "28": {
    "goal": "Đi từ góc trên trái đến dưới phải, chỉ đi phải hoặc xuống, lấy tổng điểm lớn nhất.",
    "idea": "Để đến một ô, chỉ có thể đến từ ô trên hoặc ô trái. Lấy tổng lớn hơn rồi cộng điểm ô hiện tại.",
    "trace": [
      "Lưới 1 2 / 3 4: đi phải được 1+2+4=7.",
      "Đi xuống được 1+3+4=8 → chọn 8. Phải tính cả ô đầu và ô cuối."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;const long long NEG=-(1LL<<60);\n    vector<vector<long long>>dp(n,vector<long long>(m,NEG));\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++){long long x;cin>>x;\n        if(r==0&&c==0)dp[r][c]=x;\n        else{long long best=NEG;if(r>0)best=max(best,dp[r-1][c]);if(c>0)best=max(best,dp[r][c-1]);dp[r][c]=best+x;}\n    }\n    cout<<dp[n-1][m-1];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai đường",
        "input": "2 2\n1 2\n3 4",
        "expected": "8"
      },
      {
        "name": "Điểm âm",
        "input": "2 2\n-1 -2\n-3 -4",
        "expected": "-7"
      }
    ],
    "limit": ""
  },
  "29": {
    "goal": "Đếm đường đi phải hoặc xuống, tránh ô #.",
    "idea": "Ô bị chặn có 0 cách đến. Ô trống nhận tổng số cách từ trên và trái.",
    "trace": [
      "Lưới 2×2 trống có 2 đường: phải→xuống, xuống→phải.",
      "Chặn ô trên phải → chỉ còn đường xuống→phải."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<string>a(n);for(auto &row:a)cin>>row;\n    vector<vector<long long>>dp(n,vector<long long>(m));\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++)if(a[r][c]!='#'){\n        if(r==0&&c==0)dp[r][c]=1;\n        else{if(r>0)dp[r][c]+=dp[r-1][c];if(c>0)dp[r][c]+=dp[r][c-1];dp[r][c]%=1000000007;}\n    }\n    cout<<dp[n-1][m-1];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Lưới trống",
        "input": "2 2\n..\n..",
        "expected": "2"
      },
      {
        "name": "Chặn đầu",
        "input": "2 2\n#.\n..",
        "expected": "0"
      }
    ],
    "limit": ""
  },
  "30": {
    "goal": "Đếm số đỉnh đi đến được từ S trong một cây.",
    "idea": "Dùng hàng đợi: thăm S, rồi các hàng xóm, rồi hàng xóm của chúng. Đánh dấu để không đếm lại.",
    "trace": [
      "Cây 1—2—3, bắt đầu 2.",
      "Thăm 2 rồi 1 và 3 → đếm 3. Cây hợp lệ luôn liên thông, nên đáp án cũng chính là N."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,s;cin>>n>>s;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<bool>seen(n+1,false);queue<int>q;q.push(s);seen[s]=true;int count=0;\n    while(!q.empty()){int u=q.front();q.pop();count++;\n        for(int v:g[u])if(!seen[v]){seen[v]=true;q.push(v);}\n    }\n    cout<<count;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một đỉnh",
        "input": "1 1",
        "expected": "1"
      },
      {
        "name": "Xuất phát giữa",
        "input": "3 2\n1 2\n2 3",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "31": {
    "goal": "Tính mỗi đỉnh cách gốc 1 bao nhiêu cạnh.",
    "idea": "Gốc có độ sâu 0. Khi đi từ cha sang con, độ sâu tăng 1.",
    "trace": [
      "Cạnh 1—2, 2—3.",
      "Độ sâu 1 là 0, của 2 là 1, của 3 là 2."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<int> parent(n+1,0),depth(n+1,-1),order;queue<int>q;\n    depth[1]=0;q.push(1);\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);\n        for(int v:g[u])if(depth[v]==-1){parent[v]=u;depth[v]=depth[u]+1;q.push(v);}\n    }\n    for(int i=1;i<=n;i++)cout<<depth[i]<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Gốc duy nhất",
        "input": "1",
        "expected": "0"
      },
      {
        "name": "Đường thẳng",
        "input": "3\n1 2\n2 3",
        "expected": "0 1 2"
      }
    ],
    "limit": ""
  },
  "32": {
    "goal": "Đếm số lá khi cây có gốc 1. Lá là đỉnh không có con.",
    "idea": "Xác định cha của mỗi đỉnh. Đỉnh nào không làm cha của ai là lá.",
    "trace": [
      "1 nối 2 và 3 → 2,3 là lá; 1 có con nên không phải lá.",
      "Cây chỉ có đỉnh 1 → 1 không có con → một lá."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<int> parent(n+1,0),depth(n+1,-1),order;queue<int>q;\n    depth[1]=0;q.push(1);\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);\n        for(int v:g[u])if(depth[v]==-1){parent[v]=u;depth[v]=depth[u]+1;q.push(v);}\n    }\n    vector<int>children(n+1,0);for(int i=2;i<=n;i++)children[parent[i]]++;\n    int answer=0;for(int i=1;i<=n;i++)if(children[i]==0)answer++;cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một đỉnh",
        "input": "1",
        "expected": "1"
      },
      {
        "name": "Hai con",
        "input": "3\n1 2\n1 3",
        "expected": "2"
      }
    ],
    "limit": ""
  },
  "33": {
    "goal": "Tính mỗi cây con có bao nhiêu đỉnh, gồm cả gốc của cây con đó.",
    "idea": "Ban đầu mỗi đỉnh tự tính 1. Xử lý từ dưới lên, cộng kích thước của con vào cha.",
    "trace": [
      "1 có con 2 và 3; 2 có con 4.",
      "size[4]=1; size[2]=1+1=2; size[3]=1; size[1]=1+2+1=4."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<int> parent(n+1,0),depth(n+1,-1),order;queue<int>q;\n    depth[1]=0;q.push(1);\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);\n        for(int v:g[u])if(depth[v]==-1){parent[v]=u;depth[v]=depth[u]+1;q.push(v);}\n    }\n    vector<int>size(n+1,1);\n    for(int i=n-1;i>0;i--){int u=order[i];size[parent[u]]+=size[u];}\n    for(int i=1;i<=n;i++)cout<<size[i]<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một đỉnh",
        "input": "1",
        "expected": "1"
      },
      {
        "name": "Cây nhỏ",
        "input": "4\n1 2\n1 3\n2 4",
        "expected": "4 2 1 1"
      }
    ],
    "limit": ""
  },
  "34": {
    "goal": "Tìm đường đi dài nhất trong cây, tính bằng số cạnh.",
    "idea": "Đi từ một đỉnh đến đỉnh xa nhất A. Sau đó đi từ A đến đỉnh xa nhất B. Khoảng cách A→B là đáp án.",
    "trace": [
      "Đường 1—2—3—4 có độ dài 3 cạnh.",
      "Từ 1 xa nhất là 4; từ 4 xa nhất là 1 → đáp án 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    auto farthest=[&](int start){vector<int>d(n+1,-1);queue<int>q;q.push(start);d[start]=0;int best=start;\n        while(!q.empty()){int u=q.front();q.pop();if(d[u]>d[best])best=u;\n            for(int v:g[u])if(d[v]==-1){d[v]=d[u]+1;q.push(v);}}\n        return make_pair(best,d[best]);\n    };\n    cout<<farthest(farthest(1).first).second;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một đỉnh",
        "input": "1",
        "expected": "0"
      },
      {
        "name": "Đường 4 đỉnh",
        "input": "4\n1 2\n2 3\n3 4",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "35": {
    "goal": "Tìm tổ tiên chung gần nhất của hai đỉnh trong cây gốc 1.",
    "idea": "Đỉnh nào sâu hơn thì đưa lên cha cho đến khi ngang nhau. Sau đó đưa cả hai lên từng bước, điểm gặp đầu tiên là đáp án.",
    "trace": [
      "1 có con 2,3; 2 có con 4.",
      "Tìm 4 và 3: đưa 4 lên 2. Hai đỉnh 2,3 cùng lên 1 → đáp án 1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,queries;cin>>n>>queries;\n    vector<vector<int>> g(n+1);\n    for(int i=1;i<n;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<int> parent(n+1,0),depth(n+1,-1),order;queue<int>q;\n    depth[1]=0;q.push(1);\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);\n        for(int v:g[u])if(depth[v]==-1){parent[v]=u;depth[v]=depth[u]+1;q.push(v);}\n    }\n    while(queries--){int u,v;cin>>u>>v;\n        while(depth[u]>depth[v])u=parent[u];\n        while(depth[v]>depth[u])v=parent[v];\n        while(u!=v){u=parent[u];v=parent[v];}\n        cout<<u<<'\\n';\n    }\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Cùng đỉnh",
        "input": "1 1\n1 1",
        "expected": "1"
      },
      {
        "name": "Cha và con",
        "input": "3 2\n1 2\n2 3\n1 3\n2 3",
        "expected": "1\n2"
      }
    ],
    "limit": "Bản leo từng cha có thể O(N) mỗi truy vấn. Hãy hiểu bản này trước khi học bảng tổ tiên để xử lý dữ liệu lớn."
  },
  "36": {
    "goal": "Đếm đỉnh có đường đi nối với đỉnh 1.",
    "idea": "BFS là đi theo từng lớp: thăm tất cả hàng xóm gần trước, xa sau. Đánh dấu ngay khi đưa vào hàng đợi để không thêm trùng.",
    "trace": [
      "Có cạnh 1—2, 2—3 và đỉnh 4 đứng riêng.",
      "Từ 1 đến được 3 đỉnh; có 2 nhóm; khoảng cách 1→3 là 2 cạnh."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;\n    vector<vector<int>>g(n+1);\n    for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    int s=1;\n    vector<int>d(n+1,-1);queue<int>q;q.push(s);d[s]=0;\n    while(!q.empty()){int u=q.front();q.pop();for(int v:g[u])if(d[v]==-1){d[v]=d[u]+1;q.push(v);}}\n    int count=0;for(int i=1;i<=n;i++)if(d[i]!=-1)count++;cout<<count;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không có cạnh",
        "input": "3 0",
        "expected": "1"
      },
      {
        "name": "Hai nhóm",
        "input": "4 2\n1 2\n2 3",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "37": {
    "goal": "Đếm số nhóm đỉnh có thể đi đến nhau.",
    "idea": "BFS là đi theo từng lớp: thăm tất cả hàng xóm gần trước, xa sau. Đánh dấu ngay khi đưa vào hàng đợi để không thêm trùng. Mỗi lần bắt đầu BFS từ một đỉnh chưa thăm là thêm một nhóm.",
    "trace": [
      "Có cạnh 1—2, 2—3 và đỉnh 4 đứng riêng.",
      "Từ 1 đến được 3 đỉnh; có 2 nhóm; khoảng cách 1→3 là 2 cạnh."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;\n    vector<vector<int>>g(n+1);\n    for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<bool>seen(n+1,false);int answer=0;\n    for(int start=1;start<=n;start++)if(!seen[start]){\n        answer++;queue<int>q;q.push(start);seen[start]=true;\n        while(!q.empty()){int u=q.front();q.pop();for(int v:g[u])if(!seen[v]){seen[v]=true;q.push(v);}}\n    }\n    cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Ba đỉnh rời",
        "input": "3 0",
        "expected": "3"
      },
      {
        "name": "Một nhóm",
        "input": "3 2\n1 2\n2 3",
        "expected": "1"
      }
    ],
    "limit": ""
  },
  "38": {
    "goal": "Tìm đường từ S đến T dùng ít cạnh nhất.",
    "idea": "BFS là đi theo từng lớp: thăm tất cả hàng xóm gần trước, xa sau. Đánh dấu ngay khi đưa vào hàng đợi để không thêm trùng.",
    "trace": [
      "Có cạnh 1—2, 2—3 và đỉnh 4 đứng riêng.",
      "Từ 1 đến được 3 đỉnh; có 2 nhóm; khoảng cách 1→3 là 2 cạnh."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m,s,t;cin>>n>>m>>s>>t;\n    vector<vector<int>>g(n+1);\n    for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}\n    vector<int>d(n+1,-1);queue<int>q;q.push(s);d[s]=0;\n    while(!q.empty()){int u=q.front();q.pop();for(int v:g[u])if(d[v]==-1){d[v]=d[u]+1;q.push(v);}}\n    cout<<d[t];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không có đường",
        "input": "3 1 1 3\n1 2",
        "expected": "-1"
      },
      {
        "name": "Nguồn là đích",
        "input": "1 0 1 1",
        "expected": "0"
      }
    ],
    "limit": ""
  },
  "39": {
    "goal": "Đi từ S đến E trong mê cung bằng ít bước nhất; tránh tường #.",
    "idea": "Mỗi ô trống là một điểm. BFS thử bốn hướng, đi từng lớp khoảng cách. Lần đầu đến một ô là số bước ít nhất.",
    "trace": [
      "Lưới SE: sang phải một lần → 1.",
      "Lưới S#E: tường chắn và không có hàng khác → −1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<string>a(n);for(auto &row:a)cin>>row;\n    vector<vector<int>>d(n,vector<int>(m,-1));queue<pair<int,int>>q;int er=0,ec=0;\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++){if(a[r][c]=='S'){q.push({r,c});d[r][c]=0;}if(a[r][c]=='E'){er=r;ec=c;}}\n    int dr[]={-1,1,0,0},dc[]={0,0,-1,1};\n    while(!q.empty()){auto [r,c]=q.front();q.pop();for(int k=0;k<4;k++){\n        int nr=r+dr[k],nc=c+dc[k];\n        if(nr>=0&&nr<n&&nc>=0&&nc<m&&a[nr][nc]!='#'&&d[nr][nc]==-1){d[nr][nc]=d[r][c]+1;q.push({nr,nc});}\n    }}\n    cout<<d[er][ec];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đích sát bên",
        "input": "1 2\nSE",
        "expected": "1"
      },
      {
        "name": "Bị chặn",
        "input": "1 3\nS#E",
        "expected": "-1"
      }
    ],
    "limit": ""
  },
  "71": {
    "goal": "Đi từ S đến E trong mê cung bằng ít bước nhất; tránh tường #.",
    "idea": "Mỗi ô trống là một điểm. BFS thử bốn hướng, đi từng lớp khoảng cách. Lần đầu đến một ô là số bước ít nhất.",
    "trace": [
      "Lưới SE: sang phải một lần → 1.",
      "Lưới S#E: tường chắn và không có hàng khác → −1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<string>a(n);for(auto &row:a)cin>>row;\n    vector<vector<int>>d(n,vector<int>(m,-1));queue<pair<int,int>>q;int er=0,ec=0;\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++){if(a[r][c]=='S'){q.push({r,c});d[r][c]=0;}if(a[r][c]=='E'){er=r;ec=c;}}\n    int dr[]={-1,1,0,0},dc[]={0,0,-1,1};\n    while(!q.empty()){auto [r,c]=q.front();q.pop();for(int k=0;k<4;k++){\n        int nr=r+dr[k],nc=c+dc[k];\n        if(nr>=0&&nr<n&&nc>=0&&nc<m&&a[nr][nc]!='#'&&d[nr][nc]==-1){d[nr][nc]=d[r][c]+1;q.push({nr,nc});}\n    }}\n    cout<<d[er][ec];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đích sát bên",
        "input": "1 2\nSE",
        "expected": "1"
      },
      {
        "name": "Bị chặn",
        "input": "1 3\nS#E",
        "expected": "-1"
      }
    ],
    "limit": ""
  },
  "40": {
    "goal": "Tìm chi phí đường đi nhỏ nhất từ S đến T.",
    "idea": "Cạnh có giá khác nhau nên BFS theo số cạnh không đủ. Luôn mở rộng điểm đang có tổng chi phí nhỏ nhất; nếu tìm đường rẻ hơn thì cập nhật.",
    "trace": [
      "1→2 giá 5; 1→3 giá 2; 3→2 giá 1.",
      "Đi thẳng tốn 5, vòng qua 3 chỉ 2+1=3 → chọn 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m,s,t;cin>>n>>m>>s>>t;\n    vector<vector<pair<int,long long>>>g(n+1);\n    for(int i=0;i<m;i++){int u,v;long long w;cin>>u>>v>>w;g[u].push_back({v,w});}\n    const long long INF=(1LL<<62);vector<long long>d(n+1,INF);d[s]=0;\n    priority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<pair<long long,int>>>q;q.push({0,s});\n    while(!q.empty()){auto [distance,u]=q.top();q.pop();if(distance!=d[u])continue;\n        for(auto [v,w]:g[u])if(distance+w<d[v]){d[v]=distance+w;q.push({d[v],v});}\n    }\n    cout<<(d[t]==INF?-1:d[t]);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đi vòng rẻ hơn",
        "input": "3 3 1 2\n1 2 5\n1 3 2\n3 2 1",
        "expected": "3"
      },
      {
        "name": "Đỉnh không đến được",
        "input": "2 0 1 2",
        "expected": "-1"
      }
    ],
    "limit": "Cần hiểu BFS, pair và priority_queue trước. Dijkstra dùng được vì trọng số của bài không âm."
  },
  "41": {
    "goal": "Tìm chi phí đường đi nhỏ nhất từ S đến mọi đỉnh.",
    "idea": "Cạnh có giá khác nhau nên BFS theo số cạnh không đủ. Luôn mở rộng điểm đang có tổng chi phí nhỏ nhất; nếu tìm đường rẻ hơn thì cập nhật.",
    "trace": [
      "1→2 giá 5; 1→3 giá 2; 3→2 giá 1.",
      "Đi thẳng tốn 5, vòng qua 3 chỉ 2+1=3 → chọn 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m,s;cin>>n>>m>>s;\n    vector<vector<pair<int,long long>>>g(n+1);\n    for(int i=0;i<m;i++){int u,v;long long w;cin>>u>>v>>w;g[u].push_back({v,w});}\n    const long long INF=(1LL<<62);vector<long long>d(n+1,INF);d[s]=0;\n    priority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<pair<long long,int>>>q;q.push({0,s});\n    while(!q.empty()){auto [distance,u]=q.top();q.pop();if(distance!=d[u])continue;\n        for(auto [v,w]:g[u])if(distance+w<d[v]){d[v]=distance+w;q.push({d[v],v});}\n    }\n    for(int i=1;i<=n;i++)cout<<(d[i]==INF?-1:d[i])<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đi vòng rẻ hơn",
        "input": "3 3 1\n1 2 5\n1 3 2\n3 2 1",
        "expected": "0 3 2"
      },
      {
        "name": "Đỉnh không đến được",
        "input": "2 0 1",
        "expected": "0 -1"
      }
    ],
    "limit": "Cần hiểu BFS, pair và priority_queue trước. Dijkstra dùng được vì trọng số của bài không âm."
  },
  "42": {
    "goal": "Trả lời nhiều câu hỏi đường đi ngắn nhất trên đồ thị có thể có cạnh âm.",
    "idea": "Lập bảng d[u][v]. Lần lượt cho phép đi qua mỗi đỉnh k; nếu u→k→v rẻ hơn, sửa d[u][v].",
    "trace": [
      "1→2 giá 4, 2→3 giá −1, 1→3 giá 10.",
      "Cho phép qua 2: đường 1→3 giảm từ 10 xuống 4−1=3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m,q;cin>>n>>m>>q;const long long INF=(1LL<<60);\n    vector<vector<long long>>d(n+1,vector<long long>(n+1,INF));for(int i=1;i<=n;i++)d[i][i]=0;\n    for(int i=0;i<m;i++){int u,v;long long w;cin>>u>>v>>w;d[u][v]=min(d[u][v],w);}\n    for(int k=1;k<=n;k++)for(int u=1;u<=n;u++)for(int v=1;v<=n;v++)\n        if(d[u][k]!=INF&&d[k][v]!=INF)d[u][v]=min(d[u][v],d[u][k]+d[k][v]);\n    while(q--){int u,v;cin>>u>>v;if(d[u][v]==INF)cout<<\"INF\\n\";else cout<<d[u][v]<<'\\n';}\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Cùng đỉnh và không có đường",
        "input": "2 0 2\n1 1\n1 2",
        "expected": "0\nINF"
      },
      {
        "name": "Chọn cạnh rẻ",
        "input": "2 2 1\n1 2 8\n1 2 3\n1 2",
        "expected": "3"
      }
    ],
    "limit": ""
  },
  "43": {
    "goal": "Sắp các việc sao cho mọi việc tiên quyết đều đứng trước việc phụ thuộc.",
    "idea": "Đếm mỗi việc còn bao nhiêu điều kiện chưa xong. Làm một việc có số điều kiện bằng 0, rồi gỡ nó khỏi điều kiện của các việc sau.",
    "trace": [
      "1 phải trước 2 và 3 → 1 làm đầu; 2 và 3 thứ tự nào cũng được.",
      "1 trước 2, 2 trước 1 → không có việc nào bắt đầu được → IMPOSSIBLE."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;\n    vector<vector<int>>g(n+1);vector<int>degree(n+1,0);\n    for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);degree[v]++;}\n    queue<int>q;for(int i=1;i<=n;i++)if(degree[i]==0)q.push(i);vector<int>order;\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);for(int v:g[u])if(--degree[v]==0)q.push(v);}\n    if((int)order.size()!=n)cout<<\"IMPOSSIBLE\";else for(int u:order)cout<<u<<' ';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Chu trình",
        "input": "2 2\n1 2\n2 1",
        "expected": "IMPOSSIBLE"
      },
      {
        "name": "Có nhiều thứ tự đúng",
        "input": "3 2\n1 2\n1 3",
        "expected": "1 2 3"
      }
    ],
    "limit": ""
  },
  "44": {
    "goal": "Kiểm tra đồ thị có vòng đi khép kín hay không. D là có hướng, U là vô hướng.",
    "idea": "Vô hướng: cạnh nối hai điểm vốn đã nối với nhau tạo vòng. Có hướng: thử bỏ các đỉnh không có cạnh đi vào; còn sót đỉnh nghĩa là có vòng.",
    "trace": [
      "D: 1→2→3→1 tạo vòng.",
      "D: 1→2, 1→3, 2→3 không tạo vòng; không dùng cách vô hướng cho trường hợp này."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nstruct DSU {\n    vector<int>p,size;\n    DSU(int n):p(n+1),size(n+1,1){iota(p.begin(),p.end(),0);}\n    int find(int x){while(x!=p[x]){p[x]=p[p[x]];x=p[x];}return x;}\n    bool join(int a,int b){a=find(a);b=find(b);if(a==b)return false;\n        if(size[a]<size[b])swap(a,b);p[b]=a;size[a]+=size[b];return true;}\n};\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nchar mode;int n,m;cin>>mode>>n>>m;\n    if(mode=='U'){DSU d(n);bool cycle=false;for(int i=0;i<m;i++){int u,v;cin>>u>>v;if(!d.join(u,v))cycle=true;}cout<<(cycle?\"CYCLE\":\"ACYCLIC\");}\n    else{\n    vector<vector<int>>g(n+1);vector<int>degree(n+1,0);\n    for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);degree[v]++;}\n    queue<int>q;for(int i=1;i<=n;i++)if(degree[i]==0)q.push(i);vector<int>order;\n    while(!q.empty()){int u=q.front();q.pop();order.push_back(u);for(int v:g[u])if(--degree[v]==0)q.push(v);}\n        cout<<((int)order.size()<n?\"CYCLE\":\"ACYCLIC\");\n    }\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Có hướng không vòng",
        "input": "D 3 3\n1 2\n1 3\n2 3",
        "expected": "ACYCLIC"
      },
      {
        "name": "Tam giác vô hướng",
        "input": "U 3 3\n1 2\n2 3\n3 1",
        "expected": "CYCLE"
      }
    ],
    "limit": ""
  },
  "45": {
    "goal": "Nối tất cả đỉnh bằng các cạnh có tổng giá nhỏ nhất, không tạo vòng.",
    "idea": "Xét cạnh từ rẻ đến đắt. Chỉ lấy cạnh nối hai nhóm đang rời nhau; ghép chúng thành một nhóm.",
    "trace": [
      "Ba cạnh 1—2 giá 1, 2—3 giá 2, 1—3 giá 9.",
      "Lấy cạnh giá 1 và 2 là nối đủ; bỏ cạnh giá 9 → tổng 3."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nstruct DSU {\n    vector<int>p,size;\n    DSU(int n):p(n+1),size(n+1,1){iota(p.begin(),p.end(),0);}\n    int find(int x){while(x!=p[x]){p[x]=p[p[x]];x=p[x];}return x;}\n    bool join(int a,int b){a=find(a);b=find(b);if(a==b)return false;\n        if(size[a]<size[b])swap(a,b);p[b]=a;size[a]+=size[b];return true;}\n};\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<tuple<long long,int,int>>edges;\n    for(int i=0;i<m;i++){int u,v;long long w;cin>>u>>v>>w;edges.push_back({w,u,v});}\n    sort(edges.begin(),edges.end());DSU d(n);long long total=0;\n    for(auto [w,u,v]:edges)if(d.join(u,v))total+=w;cout<<total;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một đỉnh",
        "input": "1 0",
        "expected": "0"
      },
      {
        "name": "Cạnh âm",
        "input": "3 3\n1 2 -2\n2 3 1\n1 3 4",
        "expected": "-1"
      }
    ],
    "limit": ""
  },
  "46": {
    "goal": "Kiểm tra N có phải số nguyên tố: chỉ có hai ước dương là 1 và chính nó.",
    "idea": "Thử chia N cho các số từ 2 đến căn N. Có một ước là đủ kết luận không nguyên tố.",
    "trace": [
      "N=9 chia hết cho 3 → COMPOSITE.",
      "N=7 không chia hết cho 2; không cần thử quá căn 7 → PRIME."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long n;cin>>n;bool prime=n>=2;\n    for(long long d=2;d<=n/d;d++)if(n%d==0){prime=false;break;}\n    cout<<(prime?\"PRIME\":\"COMPOSITE\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không phải nguyên tố",
        "input": "1",
        "expected": "COMPOSITE"
      },
      {
        "name": "Bình phương",
        "input": "49",
        "expected": "COMPOSITE"
      },
      {
        "name": "Số nhỏ nhất",
        "input": "2",
        "expected": "PRIME"
      }
    ],
    "limit": ""
  },
  "47": {
    "goal": "Liệt kê mọi số nguyên tố không vượt N.",
    "idea": "Viết danh sách số rồi gạch các bội của 2,3,5,... Những số chưa bị gạch là nguyên tố.",
    "trace": [
      "Đến 10: gạch 4,6,8,10 do chia hết cho 2; gạch 9 do chia hết cho 3.",
      "Còn 2,3,5,7."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<bool>prime(n+1,true);prime[0]=false;if(n>=1)prime[1]=false;\n    for(int p=2;p<=n/p;p++)if(prime[p])for(int k=p*p;k<=n;k+=p)prime[k]=false;\n    for(int i=2;i<=n;i++)if(prime[i])cout<<i<<' ';cout<<'\\n';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không có số nào",
        "input": "1",
        "expected": ""
      },
      {
        "name": "Đến 7",
        "input": "7",
        "expected": "2 3 5 7"
      }
    ],
    "limit": ""
  },
  "48": {
    "goal": "Tìm số dương lớn nhất chia hết cả |a| và |b|.",
    "idea": "Chia a cho b lấy phần dư. Ước chung của a,b cũng là ước chung của b,phần dư. Lặp đến khi dư 0.",
    "trace": [
      "48 chia 18 dư 12 → xét 18,12.",
      "18 chia 12 dư 6 → xét 12,6.",
      "12 chia 6 dư 0 → đáp án 6."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long a,b;cin>>a>>b;a=abs(a);b=abs(b);\n    while(b!=0){long long remainder=a%b;a=b;b=remainder;}\n    cout<<a;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Có số âm",
        "input": "-12 18",
        "expected": "6"
      },
      {
        "name": "Một số 0",
        "input": "0 7",
        "expected": "7"
      }
    ],
    "limit": ""
  },
  "49": {
    "goal": "Tìm bội chung nhỏ nhất của a và b. Nếu một số bằng 0, in 0.",
    "idea": "Tích a×b đếm phần chung hai lần. Chia bớt ước chung lớn nhất: a/gcd(a,b)×b.",
    "trace": [
      "12 và 18 có gcd=6.",
      "12/6×18=36, là số nhỏ nhất chia hết cả 12 và 18."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long a,b;cin>>a>>b;if(a==0||b==0)cout<<0;else cout<<(a/gcd(a,b))*b;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Có 0",
        "input": "0 0",
        "expected": "0"
      },
      {
        "name": "Nguyên tố cùng nhau",
        "input": "3 7",
        "expected": "21"
      }
    ],
    "limit": ""
  },
  "50": {
    "goal": "Tách N thành tích các lũy thừa của số nguyên tố.",
    "idea": "Thử ước nhỏ từ 2. Chia liên tục cho cùng một ước để đếm số mũ, rồi chuyển sang ước tiếp theo.",
    "trace": [
      "12 / 2 = 6, /2 = 3 → có 2².",
      "Phần còn lại 3 → kết quả 2^2 3^1."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long n;cin>>n;if(n==1){cout<<1;return 0;}\n    for(long long p=2;p<=n/p;p++)if(n%p==0){int count=0;\n        while(n%p==0){n/=p;count++;}cout<<p<<'^'<<count<<' ';\n    }\n    if(n>1)cout<<n<<\"^1\";\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Số 1",
        "input": "1",
        "expected": "1"
      },
      {
        "name": "Tích nhỏ",
        "input": "12",
        "expected": "2^2 3^1"
      },
      {
        "name": "Nguyên tố",
        "input": "13",
        "expected": "13^1"
      }
    ],
    "limit": ""
  },
  "51": {
    "goal": "Tính phần dư của a mũ b khi chia m mà không tạo ra số khổng lồ.",
    "idea": "Bình phương để tăng nhanh số mũ. Số mũ lẻ thì nhân thêm a vào đáp án; sau đó chia đôi số mũ.",
    "trace": [
      "2^10 = (2^5)²; 2^5 = 2×(2²)².",
      "Sau mỗi phép nhân lấy phần dư. Dùng kiểu rộng cho phép nhân để tránh tràn."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nusing ull=unsigned long long;\null power(ull a,ull b,ull m){\n    ull answer=1%m;a%=m;\n    while(b){if(b%2)answer=(unsigned __int128)answer*a%m;\n        a=(unsigned __int128)a*a%m;b/=2;}\n    return answer;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\null a,b,m;cin>>a>>b>>m;cout<<power(a,b,m);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Mũ 0",
        "input": "5 0 7",
        "expected": "1"
      },
      {
        "name": "Modulo 1",
        "input": "5 0 1",
        "expected": "0"
      },
      {
        "name": "Số lớn",
        "input": "1000000000000000000 2 1000000000000000000",
        "expected": "0"
      }
    ],
    "limit": ""
  },
  "52": {
    "goal": "Tính Fibonacci khi N lớn đến mức không thể lặp N lần.",
    "idea": "Tính cặp F(k),F(k+1). Từ cặp đó tính trực tiếp F(2k),F(2k+1), nên mỗi lần giảm N còn một nửa.",
    "trace": [
      "F2=1,F3=2.",
      "F4=F2×(2F3−F2)=3; F5=F2²+F3²=5.",
      "Đây là bài nâng cao; hãy chạy bài 20 trước."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nconst long long MOD=1000000007;\npair<long long,long long> fib(unsigned long long n){\n    if(n==0)return {0,1};auto [a,b]=fib(n/2);\n    long long c=a*((2*b-a+MOD)%MOD)%MOD,d=(a*a+b*b)%MOD;\n    if(n%2)return {d,(c+d)%MOD};return {c,d};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nunsigned long long n;cin>>n;cout<<fib(n).first;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Số 0",
        "input": "0",
        "expected": "0"
      },
      {
        "name": "Số thứ 10",
        "input": "10",
        "expected": "55"
      }
    ],
    "limit": ""
  },
  "53": {
    "goal": "Tìm x để a×x chia p dư 1. Đề cho p nguyên tố và a không chia hết cho p.",
    "idea": "Theo định lý Fermat, x = a^(p−2) mod p. Dùng lại phép lũy thừa chia đôi ở bài 51.",
    "trace": [
      "a=3,p=11: 3×4=12, chia 11 dư 1 → x=4.",
      "Không dùng công thức này tùy ý nếu p không nguyên tố."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nusing ull=unsigned long long;\null power(ull a,ull b,ull m){\n    ull answer=1%m;a%=m;\n    while(b){if(b%2)answer=(unsigned __int128)answer*a%m;\n        a=(unsigned __int128)a*a%m;b/=2;}\n    return answer;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\null a,p;cin>>a>>p;cout<<power(a,p-2,p);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "a bằng 1",
        "input": "1 7",
        "expected": "1"
      },
      {
        "name": "p nhỏ nhất",
        "input": "1 2",
        "expected": "1"
      }
    ],
    "limit": ""
  },
  "54": {
    "goal": "Tính độ dài đoạn thẳng nối hai điểm.",
    "idea": "Chênh lệch ngang và dọc tạo tam giác vuông. Khoảng cách là căn của dx²+dy².",
    "trace": [
      "(0,0) và (3,4) → dx=3,dy=4.",
      "Căn(9+16)=5."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble x1,y1,x2,y2;cin>>x1>>y1>>x2>>y2;\n    cout<<fixed<<setprecision(6)<<hypot(x2-x1,y2-y1);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Trùng điểm",
        "input": "2 3 2 3",
        "expected": "0"
      },
      {
        "name": "Nằm ngang",
        "input": "-2 1 3 1",
        "expected": "5"
      }
    ],
    "limit": ""
  },
  "55": {
    "goal": "Tính diện tích tam giác từ ba tọa độ.",
    "idea": "Lấy trị tuyệt đối của tích có hướng hai cạnh rồi chia 2. Trị tuyệt đối giúp thứ tự nhập điểm không làm diện tích âm.",
    "trace": [
      "(0,0),(4,0),(0,3) → đáy 4, cao 3.",
      "Diện tích 4×3/2=6."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble ax,ay,bx,by,cx,cy;cin>>ax>>ay>>bx>>by>>cx>>cy;\n    double cross=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);\n    cout<<fixed<<setprecision(6)<<abs(cross)/2;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Thẳng hàng",
        "input": "0 0\n1 1\n2 2",
        "expected": "0"
      },
      {
        "name": "Đảo thứ tự",
        "input": "0 0\n0 3\n4 0",
        "expected": "6"
      }
    ],
    "limit": ""
  },
  "56": {
    "goal": "Kiểm tra ba điểm có nằm trên cùng một đường thẳng.",
    "idea": "Hai hướng AB,AC có tích có hướng bằng 0 thì thẳng hàng. Không cần chia độ dốc nên xử lý được đường thẳng đứng.",
    "trace": [
      "(1,0),(1,2),(1,7) cùng x=1 → thẳng hàng.",
      "(0,0),(1,0),(0,1) tạo tam giác → không."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long ax,ay,bx,by,cx,cy;cin>>ax>>ay>>bx>>by>>cx>>cy;\n    __int128 cross=(__int128)(bx-ax)*(cy-ay)-(__int128)(by-ay)*(cx-ax);\n    cout<<(cross==0?\"YES\":\"NO\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Thẳng đứng",
        "input": "1 0\n1 2\n1 7",
        "expected": "YES"
      },
      {
        "name": "Tam giác",
        "input": "0 0\n1 0\n0 1",
        "expected": "NO"
      }
    ],
    "limit": ""
  },
  "57": {
    "goal": "Nhìn theo hướng A→B, điểm C ở bên trái, bên phải hay trên đường thẳng?",
    "idea": "Tính tích có hướng AB×AC. Dương là trái, âm là phải, 0 là thẳng hàng.",
    "trace": [
      "A=(0,0),B=(4,0): đang nhìn sang phải.",
      "C=(2,3) ở phía trên → bên trái của hướng nhìn → LEFT."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long ax,ay,bx,by,cx,cy;cin>>ax>>ay>>bx>>by>>cx>>cy;\n    __int128 cross=(__int128)(bx-ax)*(cy-ay)-(__int128)(by-ay)*(cx-ax);\n    cout<<(cross>0?\"LEFT\":cross<0?\"RIGHT\":\"COLLINEAR\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Bên phải",
        "input": "0 0 4 0 2 -3",
        "expected": "RIGHT"
      },
      {
        "name": "Thẳng hàng",
        "input": "0 0 4 0 2 0",
        "expected": "COLLINEAR"
      }
    ],
    "limit": ""
  },
  "58": {
    "goal": "Tìm các điểm tạo thành đường bao ngoài cùng, như căng dây chun quanh tập điểm.",
    "idea": "Sắp điểm từ trái sang phải, dựng mép dưới rồi mép trên. Nếu ba điểm cuối không tạo góc quay trái thì bỏ điểm giữa.",
    "trace": [
      "Bốn góc hình vuông và điểm ở tâm.",
      "Dây chun chỉ chạm bốn góc; điểm ở tâm bị loại.",
      "Bài này cần nắm tích có hướng ở bài 57."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\nusing Point=pair<long long,long long>;\n__int128 turn(Point a,Point b,Point c){return (__int128)(b.first-a.first)*(c.second-a.second)-(__int128)(b.second-a.second)*(c.first-a.first);}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<Point>a(n);for(auto &p:a)cin>>p.first>>p.second;\n    sort(a.begin(),a.end());a.erase(unique(a.begin(),a.end()),a.end());\n    if(a.size()==1){cout<<1<<'\\n'<<a[0].first<<' '<<a[0].second;return 0;}\n    vector<Point>h;\n    for(auto p:a){while(h.size()>=2&&turn(h[h.size()-2],h.back(),p)<=0)h.pop_back();h.push_back(p);}\n    int lower=h.size();\n    for(int i=(int)a.size()-2;i>=0;i--){auto p=a[i];while((int)h.size()>lower&&turn(h[h.size()-2],h.back(),p)<=0)h.pop_back();h.push_back(p);}\n    h.pop_back();cout<<h.size()<<'\\n';for(auto p:h)cout<<p.first<<' '<<p.second<<'\\n';\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Điểm trùng",
        "input": "3\n1 1\n1 1\n1 1",
        "expected": "1\n1 1"
      },
      {
        "name": "Thẳng hàng",
        "input": "3\n0 0\n1 1\n2 2",
        "expected": "2\n0 0\n2 2"
      }
    ],
    "limit": ""
  },
  "59": {
    "goal": "Chọn nhiều hoạt động không trùng thời gian nhất.",
    "idea": "Chọn hoạt động kết thúc sớm nhất để còn nhiều thời gian cho các hoạt động sau. Sau mỗi lần chọn, bỏ các hoạt động bắt đầu quá sớm.",
    "trace": [
      "(1,3),(2,5),(3,4) → chọn (1,3), rồi (3,4).",
      "Kết thúc lúc 3 được phép bắt đầu hoạt động tiếp lúc 3 → 2 hoạt động."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<pair<long long,long long>>a;\n    for(int i=0;i<n;i++){long long start,end;cin>>start>>end;a.push_back({end,start});}\n    sort(a.begin(),a.end());long long last=numeric_limits<long long>::min();int answer=0;\n    for(auto [end,start]:a)if(start>=last){answer++;last=end;}cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Chạm đầu mút",
        "input": "3\n1 3\n2 5\n3 4",
        "expected": "2"
      },
      {
        "name": "Trùng nhau",
        "input": "2\n1 4\n2 3",
        "expected": "1"
      }
    ],
    "limit": ""
  },
  "60": {
    "goal": "Đổi N bằng ít tờ nhất, với mệnh giá 1,5,10,20,50,100.",
    "idea": "Lấy nhiều tờ lớn nhất có thể, trừ số tiền đã đổi, rồi sang mệnh giá nhỏ hơn.",
    "trace": [
      "186: lấy 100, còn 86; lấy 50, còn 36; lấy 20, còn 16.",
      "Lấy 10,5,1 → tổng 6 tờ. Mẫu PDF ghi 5 là sai."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long n;cin>>n;int notes[]={100,50,20,10,5,1};long long answer=0;\n    for(int value:notes){answer+=n/value;n%=value;}cout<<answer;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đúng một tờ",
        "input": "100",
        "expected": "1"
      },
      {
        "name": "Nhiều mệnh giá",
        "input": "186",
        "expected": "6"
      }
    ],
    "limit": ""
  },
  "61": {
    "goal": "Nối mọi dây thành một; mỗi lần nối tốn tổng chiều dài hai dây. Tìm chi phí nhỏ nhất.",
    "idea": "Nối hai dây ngắn nhất trước, rồi đưa dây mới trở lại danh sách. Các dây dài sẽ ít bị cộng lặp lại hơn.",
    "trace": [
      "1,2,3: nối 1+2 tốn 3, còn 3,3.",
      "Nối 3+3 tốn 6 → tổng 9."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;priority_queue<long long,vector<long long>,greater<long long>>q;\n    for(int i=0;i<n;i++){long long x;cin>>x;q.push(x);}long long cost=0;\n    while(q.size()>1){long long a=q.top();q.pop();long long b=q.top();q.pop();cost+=a+b;q.push(a+b);}cout<<cost;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Một dây",
        "input": "1\n7",
        "expected": "0"
      },
      {
        "name": "Ba dây",
        "input": "3\n1 2 3",
        "expected": "9"
      }
    ],
    "limit": ""
  },
  "62": {
    "goal": "Mỗi việc mất 1 đơn vị thời gian, có hạn chót và tiền thưởng. Chọn việc để kiếm nhiều nhất.",
    "idea": "Xếp theo hạn chót. Tạm nhận việc; nếu số việc vượt số chỗ trước hạn đó, bỏ việc có thưởng thấp nhất.",
    "trace": [
      "Hai việc cùng hạn 1, thưởng 10 và 40.",
      "Chỉ có một chỗ làm → giữ việc thưởng 40."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<pair<int,long long>>jobs(n);for(auto &j:jobs)cin>>j.first>>j.second;sort(jobs.begin(),jobs.end());\n    priority_queue<long long,vector<long long>,greater<long long>>chosen;\n    for(auto [deadline,profit]:jobs){if(profit<=0)continue;chosen.push(profit);if((int)chosen.size()>deadline)chosen.pop();}\n    long long total=0;while(!chosen.empty()){total+=chosen.top();chosen.pop();}cout<<total;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Trùng hạn",
        "input": "2\n1 10\n1 40",
        "expected": "40"
      },
      {
        "name": "Đủ chỗ",
        "input": "2\n1 10\n2 20",
        "expected": "30"
      }
    ],
    "limit": ""
  },
  "63": {
    "goal": "Đi đến D, mỗi bình đầy đi được K. Tìm số lần đổ xăng ít nhất.",
    "idea": "Ban đầu đầy bình. Mỗi lần chưa tới đích, đi đến trạm xa nhất còn trong tầm rồi đổ đầy. Không có trạm tiến lên được thì thất bại.",
    "trace": [
      "D=25,K=10; trạm 7,10,14,20.",
      "Đi đến 10, đổ; đến 20, đổ; đến 25 → 2 lần."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;long long d,k;cin>>n>>d>>k;vector<long long>a(n);for(auto &x:a)cin>>x;\n    long long position=0;int i=0,stops=0;\n    while(position+k<d){long long next=position;\n        while(i<n&&a[i]<=position+k){next=a[i];i++;}\n        if(next==position){cout<<-1;return 0;}position=next;stops++;\n    }\n    cout<<stops;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không cần dừng",
        "input": "1 8 10\n4",
        "expected": "0"
      },
      {
        "name": "Không tới trạm",
        "input": "1 20 5\n8",
        "expected": "-1"
      }
    ],
    "limit": ""
  },
  "64": {
    "goal": "Chia công việc cho M máy giống nhau sao cho máy bận nhất kết thúc sớm nhất.",
    "idea": "Thử giao từng việc cho từng máy, tính tổng tải. Khi một cách đã không thể tốt hơn đáp án đang có, ngừng thử nhánh đó.",
    "trace": [
      "Việc 3,2,2; hai máy.",
      "Giao 3 riêng, hai việc 2 cùng máy → tải 3 và 4, kết thúc ở 4.",
      "Thử mọi cách hợp lệ để bảo đảm tối ưu; chọn máy nhẹ nhất mỗi lượt chưa chắc đúng."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<long long>a(n);for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end(),greater<long long>());vector<long long>load(m,0);long long best=accumulate(a.begin(),a.end(),0LL);\n    function<void(int)>search=[&](int i){\n        if(i==n){best=min(best,*max_element(load.begin(),load.end()));return;}\n        set<long long>tried;\n        for(int robot=0;robot<m;robot++){\n            if(tried.count(load[robot]))continue;tried.insert(load[robot]);\n            if(load[robot]+a[i]>=best)continue;\n            load[robot]+=a[i];search(i+1);load[robot]-=a[i];\n        }\n    };\n    search(0);cout<<best;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai máy",
        "input": "3 2\n3 2 2",
        "expected": "4"
      },
      {
        "name": "Một máy",
        "input": "3 1\n3 2 2",
        "expected": "7"
      },
      {
        "name": "Mẫu đã sửa",
        "input": "6 3\n8 7 6 5 4 3",
        "expected": "11"
      }
    ],
    "limit": "Tìm kiếm chính xác nhưng thời gian có thể tăng theo cấp số nhân. Chạy test nhỏ trước; giới hạn thời gian của trình duyệt không bảo đảm xử lý mọi input lớn nhất."
  },
  "79": {
    "goal": "Chia công việc cho M máy giống nhau sao cho máy bận nhất kết thúc sớm nhất.",
    "idea": "Thử giao từng việc cho từng máy, tính tổng tải. Khi một cách đã không thể tốt hơn đáp án đang có, ngừng thử nhánh đó.",
    "trace": [
      "Việc 3,2,2; hai máy.",
      "Giao 3 riêng, hai việc 2 cùng máy → tải 3 và 4, kết thúc ở 4.",
      "Thử mọi cách hợp lệ để bảo đảm tối ưu; chọn máy nhẹ nhất mỗi lượt chưa chắc đúng."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<long long>a(n);for(auto &x:a)cin>>x;\n    sort(a.begin(),a.end(),greater<long long>());vector<long long>load(m,0);long long best=accumulate(a.begin(),a.end(),0LL);\n    function<void(int)>search=[&](int i){\n        if(i==n){best=min(best,*max_element(load.begin(),load.end()));return;}\n        set<long long>tried;\n        for(int robot=0;robot<m;robot++){\n            if(tried.count(load[robot]))continue;tried.insert(load[robot]);\n            if(load[robot]+a[i]>=best)continue;\n            load[robot]+=a[i];search(i+1);load[robot]-=a[i];\n        }\n    };\n    search(0);cout<<best;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai máy",
        "input": "3 2\n3 2 2",
        "expected": "4"
      },
      {
        "name": "Một máy",
        "input": "3 1\n3 2 2",
        "expected": "7"
      },
      {
        "name": "Mẫu đã sửa",
        "input": "6 3\n8 7 6 5 4 3",
        "expected": "11"
      }
    ],
    "limit": "Tìm kiếm chính xác nhưng thời gian có thể tăng theo cấp số nhân. Chạy test nhỏ trước; giới hạn thời gian của trình duyệt không bảo đảm xử lý mọi input lớn nhất."
  },
  "65": {
    "goal": "Hai người lần lượt lấy 1 hoặc 2 viên. Người không còn nước đi thua.",
    "idea": "Nhóm theo từng 3 viên. Với bội của 3, lấy 1 hay 2 đều để đối thủ một thế thắng; ngược lại có thể lấy để đưa về bội của 3.",
    "trace": [
      "N=3: lấy 1 thì đối thủ lấy 2; lấy 2 thì đối thủ lấy 1 → thua.",
      "N=4: lấy 1, để lại 3 → thắng."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nlong long n;cin>>n;cout<<(n%3==0?\"SECOND\":\"FIRST\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Thế thua",
        "input": "3",
        "expected": "SECOND"
      },
      {
        "name": "Thế thắng",
        "input": "4",
        "expected": "FIRST"
      }
    ],
    "limit": ""
  },
  "66": {
    "goal": "Mỗi lượt được lấy 1,3 hoặc 4 viên. Xác định người đi trước có chiến thuật thắng không.",
    "idea": "Một trạng thái thắng nếu có ít nhất một nước đi đưa đối thủ vào trạng thái thua. Không còn viên nào là thua.",
    "trace": [
      "1 viên → lấy 1 → thắng.",
      "2 viên → chỉ lấy 1, đối thủ thắng → thua.",
      "3 viên → lấy hết 3 → thắng."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<bool>win(n+1,false);\n    for(int i=1;i<=n;i++)for(int take:{1,3,4})if(take<=i&&!win[i-take])win[i]=true;\n    cout<<(win[n]?\"FIRST\":\"SECOND\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai viên",
        "input": "2",
        "expected": "SECOND"
      },
      {
        "name": "Ba viên",
        "input": "3",
        "expected": "FIRST"
      }
    ],
    "limit": ""
  },
  "67": {
    "goal": "Chơi Nim: mỗi lượt chọn một đống, lấy ít nhất một viên; người hết nước đi thua.",
    "idea": "Tính XOR tất cả kích thước. XOR=0 là thế thua, khác 0 là thế thắng. XOR dùng ký hiệu ^, không phải lũy thừa trong C++.",
    "trace": [
      "Hai đống 1,1: 1 XOR 1=0 → SECOND.",
      "Một đống 3: lấy hết được → FIRST."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;unsigned long long value=0;\n    for(int i=0;i<n;i++){unsigned long long x;cin>>x;value^=x;}\n    cout<<(value?\"FIRST\":\"SECOND\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai đống bằng nhau",
        "input": "2\n1 1",
        "expected": "SECOND"
      },
      {
        "name": "Một đống",
        "input": "1\n3",
        "expected": "FIRST"
      }
    ],
    "limit": ""
  },
  "68": {
    "goal": "Hai người lần lượt lấy số ở một trong hai đầu dãy. Tìm điểm tốt nhất người đầu bảo đảm có được.",
    "idea": "Lưu chênh lệch điểm người sắp đi hơn đối thủ. Lấy đầu trái thì được số đó trừ lợi thế của đối thủ trên phần còn lại; tương tự đầu phải.",
    "trace": [
      "Dãy 1,5: chọn 5, đối thủ lấy 1 → chênh 4, tổng 6.",
      "Điểm người đầu = (tổng+chênh)/2 = 5."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>a(n);long long sum=0;for(auto &x:a){cin>>x;sum+=x;}\n    vector<vector<long long>>dp(n,vector<long long>(n));for(int i=0;i<n;i++)dp[i][i]=a[i];\n    for(int length=2;length<=n;length++)for(int l=0;l+length<=n;l++){int r=l+length-1;dp[l][r]=max(a[l]-dp[l+1][r],a[r]-dp[l][r-1]);}\n    cout<<(sum+dp[0][n-1])/2;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai số",
        "input": "2\n1 5",
        "expected": "5"
      },
      {
        "name": "Một số âm",
        "input": "1\n-3",
        "expected": "-3"
      }
    ],
    "limit": ""
  },
  "69": {
    "goal": "Quân cờ ở (N,M), mỗi lượt đi lên, trái hoặc chéo trên trái một ô. Ai không đi được thì thua.",
    "idea": "Lập bảng thắng/thua. Ô (1,1) thua; ô khác thắng nếu có thể bước đến một ô thua.",
    "trace": [
      "(1,2) đi về (1,1) → thắng.",
      "(2,2) đi chéo về (1,1) → thắng.",
      "(3,3) chỉ tới các ô thắng → thua."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<vector<bool>>win(n+1,vector<bool>(m+1,false));\n    for(int r=1;r<=n;r++)for(int c=1;c<=m;c++){\n        if(r>1&&!win[r-1][c])win[r][c]=true;\n        if(c>1&&!win[r][c-1])win[r][c]=true;\n        if(r>1&&c>1&&!win[r-1][c-1])win[r][c]=true;\n    }\n    cout<<(win[n][m]?\"FIRST\":\"SECOND\");\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không còn nước đi",
        "input": "1 1",
        "expected": "SECOND"
      },
      {
        "name": "Ô lẻ",
        "input": "3 3",
        "expected": "SECOND"
      }
    ],
    "limit": "Bảng O(NM) dành cho học và test nhỏ. Sau khi thấy quy luật, hai tọa độ cùng lẻ là thế thua; công thức đó dùng O(1)."
  },
  "70": {
    "goal": "Mỗi lượt lấy 1 đến 3 số ở đầu dãy. Tìm chênh lệch điểm người đầu trừ người sau khi cả hai chơi tốt nhất.",
    "idea": "Thử lấy 1,2,3 số. Điểm mình vừa lấy trừ chênh lệch tốt nhất đối thủ đạt ở phần còn lại. Chọn lớn nhất.",
    "trace": [
      "Dãy 1,2,3,4,5: đáp án là −3, tức người đầu thua 3 điểm.",
      "Dấu âm là kết quả hợp lệ. Mẫu PDF ghi 3 sai dấu."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n;cin>>n;vector<long long>a(n),dp(n+1,0);for(auto &x:a)cin>>x;\n    for(int i=n-1;i>=0;i--){dp[i]=-(1LL<<60);long long taken=0;\n        for(int k=1;k<=3&&i+k<=n;k++){taken+=a[i+k-1];dp[i]=max(dp[i],taken-dp[i+k]);}\n    }\n    cout<<dp[0];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Lấy hết",
        "input": "3\n1 2 3",
        "expected": "6"
      },
      {
        "name": "Mẫu đã sửa",
        "input": "5\n1 2 3 4 5",
        "expected": "-3"
      },
      {
        "name": "Một số âm",
        "input": "1\n-4",
        "expected": "-4"
      }
    ],
    "limit": ""
  },
  "72": {
    "goal": "Đi bốn hướng từ góc trên trái đến dưới phải với tổng chi phí ô nhỏ nhất, tính cả ô xuất phát.",
    "idea": "Dùng Dijkstra như bài 40, nhưng mỗi ô là một đỉnh và giá đi vào là chi phí của ô đó.",
    "trace": [
      "Lưới 1 9 / 2 3.",
      "Đi phải tốn 1+9+3=13; đi xuống tốn 1+2+3=6 → 6."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<vector<long long>>a(n,vector<long long>(m));for(auto &row:a)for(auto &x:row)cin>>x;\n    vector<vector<long long>>d(n,vector<long long>(m,1LL<<60));d[0][0]=a[0][0];\n    using State=tuple<long long,int,int>;priority_queue<State,vector<State>,greater<State>>q;q.push({d[0][0],0,0});\n    int dr[]={-1,1,0,0},dc[]={0,0,-1,1};\n    while(!q.empty()){auto [cost,r,c]=q.top();q.pop();if(cost!=d[r][c])continue;\n        for(int k=0;k<4;k++){int nr=r+dr[k],nc=c+dc[k];if(nr<0||nr>=n||nc<0||nc>=m)continue;\n            long long next=cost+a[nr][nc];if(next<d[nr][nc]){d[nr][nc]=next;q.push({next,nr,nc});}}\n    }\n    cout<<d[n-1][m-1];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Chi phí ô đầu",
        "input": "1 1\n7",
        "expected": "7"
      },
      {
        "name": "Tránh ô đắt",
        "input": "2 2\n1 9\n2 3",
        "expected": "6"
      }
    ],
    "limit": ""
  },
  "73": {
    "goal": "Tìm lúc sớm nhất đến E khi một số ô bị chặn vĩnh viễn từ thời điểm cho trước.",
    "idea": "BFS vẫn tìm giờ đến sớm nhất. Chỉ vào ô nếu giờ đến nhỏ hơn giờ ô bị chặn. Chờ đợi không làm đường tốt hơn vì ô chỉ đóng, không mở lại.",
    "trace": [
      "S.E: bình thường đến E lúc 2.",
      "Nếu ô giữa chặn từ t=1, không được tới ô đó lúc 1 → không có đường."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m,b;cin>>n>>m>>b;vector<string>a(n);for(auto &row:a)cin>>row;\n    vector<vector<int>>blocked(n,vector<int>(m,1000000000)),d(n,vector<int>(m,-1));\n    while(b--){int r,c,t;cin>>r>>c>>t;blocked[r-1][c-1]=min(blocked[r-1][c-1],t);}\n    queue<pair<int,int>>q;int er=0,ec=0;\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++){if(a[r][c]=='S'&&blocked[r][c]>0){d[r][c]=0;q.push({r,c});}if(a[r][c]=='E'){er=r;ec=c;}}\n    int dr[]={-1,1,0,0},dc[]={0,0,-1,1};\n    while(!q.empty()){auto [r,c]=q.front();q.pop();for(int k=0;k<4;k++){\n        int nr=r+dr[k],nc=c+dc[k],t=d[r][c]+1;\n        if(nr>=0&&nr<n&&nc>=0&&nc<m&&a[nr][nc]!='#'&&d[nr][nc]==-1&&t<blocked[nr][nc]){d[nr][nc]=t;q.push({nr,nc});}\n    }}\n    cout<<d[er][ec];\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Không chặn",
        "input": "1 3 0\nS.E",
        "expected": "2"
      },
      {
        "name": "Chặn đúng lúc đến",
        "input": "1 3 1\nS.E\n1 2 1",
        "expected": "-1"
      }
    ],
    "limit": "Quy ước luyện: kiểm tra ô tại thời điểm nguyên khi đến; ô đóng từ t thì không được có mặt ở ô đó lúc t."
  },
  "74": {
    "goal": "Dùng A* tìm đường ngắn nhất, đồng thời đếm số lần lấy một trạng thái khỏi hàng đợi.",
    "idea": "Ưu tiên f=g+h: g là bước đã đi, h là khoảng cách Manhattan tới đích. Khi hòa f, ưu tiên h, hàng, cột, rồi g nhỏ hơn.",
    "trace": [
      "Lưới SE: lấy S khỏi hàng đợi, rồi E → đường dài 1, đếm 2.",
      "PDF không quy định cách phá hòa, nên số đếm không có một đáp án chung cho mọi implementation."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<string>a(n);for(auto &row:a)cin>>row;int sr=0,sc=0,er=0,ec=0;\n    for(int r=0;r<n;r++)for(int c=0;c<m;c++){if(a[r][c]=='S'){sr=r;sc=c;}if(a[r][c]=='E'){er=r;ec=c;}}\n    auto h=[&](int r,int c){return abs(r-er)+abs(c-ec);};\n    using State=tuple<int,int,int,int,int>;priority_queue<State,vector<State>,greater<State>>q;\n    vector<vector<int>>d(n,vector<int>(m,1000000000));d[sr][sc]=0;q.push({h(sr,sc),h(sr,sc),sr,sc,0});\n    int count=0,answer=-1,dr[]={-1,1,0,0},dc[]={0,0,-1,1};\n    while(!q.empty()){auto [f,estimate,r,c,g]=q.top();q.pop();count++;if(g!=d[r][c])continue;\n        if(r==er&&c==ec){answer=g;break;}\n        for(int k=0;k<4;k++){int nr=r+dr[k],nc=c+dc[k];if(nr<0||nr>=n||nc<0||nc>=m||a[nr][nc]=='#')continue;\n            if(g+1<d[nr][nc]){d[nr][nc]=g+1;int guess=h(nr,nc);q.push({g+1+guess,guess,nr,nc,g+1});}}\n    }\n    cout<<answer<<' '<<count;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Đích bên cạnh",
        "input": "1 2\nSE",
        "expected": "1 2"
      },
      {
        "name": "Bị ngăn cách",
        "input": "1 3\nS#E",
        "expected": "-1 1"
      }
    ],
    "limit": "Bộ test chấm theo quy ước A* ghi ở trên, tính cả trạng thái cũ và đích khi lấy khỏi hàng đợi. Ví dụ PDF chỉ tham khảo vì thiếu quy tắc phá hòa."
  },
  "75": {
    "goal": "Đổi chuỗi ba cảm biến thành lệnh lái robot.",
    "idea": "Đây là bài tra bảng điều kiện, không cần thuật toán phức tạp. So chuỗi với từng nhóm đã quy định.",
    "trace": [
      "010 hoặc 111 → FORWARD.",
      "100,110 → LEFT; 001,011 → RIGHT; còn lại → LOST."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint t;cin>>t;while(t--){string s;cin>>s;\n        if(s==\"010\"||s==\"111\")cout<<\"FORWARD\";\n        else if(s==\"100\"||s==\"110\")cout<<\"LEFT\";\n        else if(s==\"001\"||s==\"011\")cout<<\"RIGHT\";\n        else cout<<\"LOST\";cout<<'\\n';\n    }\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Mất vạch",
        "input": "3\n000\n101\n111",
        "expected": "LOST\nLOST\nFORWARD"
      },
      {
        "name": "Trái và phải",
        "input": "2\n100\n001",
        "expected": "LEFT\nRIGHT"
      }
    ],
    "limit": ""
  },
  "76": {
    "goal": "Tính điều khiển tỉ lệ từ sai số, rồi giới hạn đầu ra trong [−255,255].",
    "idea": "Sai số = mục tiêu − hiện tại. Nhân với Kp. Nếu vượt biên thì cắt về biên.",
    "trace": [
      "Kp=2, target=10,current=7 → sai số 3 → output 6.",
      "target=1000,current=0 → 2000 nhưng giới hạn còn 255."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble kp;int t;cin>>kp>>t;cout<<fixed<<setprecision(3);\n    while(t--){double target,current;cin>>target>>current;double output=kp*(target-current);cout<<max(-255.0,min(255.0,output))<<'\\n';}\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Hai biên",
        "input": "2 2\n1000 0\n0 1000",
        "expected": "255.000\n-255.000"
      },
      {
        "name": "Không sai số",
        "input": "3 1\n5 5",
        "expected": "0.000"
      }
    ],
    "limit": ""
  },
  "77": {
    "goal": "Tính PID qua từng sai số: hiện tại, tổng tích lũy và mức thay đổi.",
    "idea": "Mỗi bước cộng sai số vào integral, lấy sai số trừ previous làm derivative. Output=Kp×error+Ki×integral+Kd×derivative. Sau đó lưu previous.",
    "trace": [
      "Kp=1,Ki=0.5,Kd=0.25; sai số đầu 2: integral=2,derivative=2 → 3.5.",
      "Sai số tiếp 1: integral=3,derivative=−1 → 1+1.5−0.25=2.25."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\ndouble kp,ki,kd;int t;cin>>kp>>ki>>kd>>t;double integral=0,previous=0;cout<<fixed<<setprecision(6);\n    while(t--){double error;cin>>error;integral+=error;double derivative=error-previous;\n        cout<<kp*error+ki*integral+kd*derivative<<' ';previous=error;\n    }\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Mẫu đã sửa",
        "input": "1 0.5 0.25 3\n2 1 -1",
        "expected": "3.500000 2.250000 -0.500000"
      },
      {
        "name": "Chỉ tích lũy",
        "input": "0 1 0 3\n1 1 1",
        "expected": "1 2 3"
      }
    ],
    "limit": ""
  },
  "78": {
    "goal": "Chia việc cho robot có tốc độ khác nhau để thời điểm hoàn thành muộn nhất nhỏ nhất.",
    "idea": "Thử giao mỗi việc cho mỗi robot. Thời gian của robot = tổng khối lượng / tốc độ. Ghi lại cách chia có thời gian lớn nhất nhỏ nhất.",
    "trace": [
      "Việc 10,20,30; tốc độ 1,2.",
      "Giao 20 cho robot 1 → 20 giây; 10+30 cho robot 2 → 20 giây.",
      "Cả hai xong lúc 20, tốt hơn 30 trong mẫu PDF."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<double>a(n),speed(m),load(m,0);for(auto &x:a)cin>>x;for(auto &x:speed)cin>>x;\n    sort(a.begin(),a.end(),greater<double>());double best=accumulate(a.begin(),a.end(),0.0)/ *max_element(speed.begin(),speed.end());\n    function<void(int)>search=[&](int i){\n        if(i==n){double finish=0;for(int r=0;r<m;r++)finish=max(finish,load[r]/speed[r]);best=min(best,finish);return;}\n        set<pair<double,double>>tried;\n        for(int r=0;r<m;r++){if(!tried.insert({speed[r],load[r]}).second)continue;\n            if((load[r]+a[i])/speed[r]>=best)continue;\n            load[r]+=a[i];search(i+1);load[r]-=a[i];\n        }\n    };\n    search(0);cout<<fixed<<setprecision(9)<<best;\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Mẫu đã sửa",
        "input": "3 2\n10 20 30\n1 2",
        "expected": "20"
      },
      {
        "name": "Một robot",
        "input": "2 1\n3 7\n2",
        "expected": "5"
      }
    ],
    "limit": "Bản tìm kiếm chính xác dành cho input nhỏ. Thời gian có thể tăng theo cấp số nhân; dữ liệu lớn có thể vượt giới hạn chạy của trình duyệt."
  },
  "80": {
    "goal": "Mô phỏng thuật toán di truyền để tìm x trong [0,100] làm 1000−(x−37)² lớn nhất.",
    "idea": "Giữ 20 ứng viên; chọn cha mẹ tốt qua giải đấu 3 ứng viên, lai bit và đột biến, luôn giữ một ứng viên tốt nhất. Lặp 100 thế hệ.",
    "trace": [
      "x=36 có điểm 999; x=37 có điểm 1000.",
      "Ứng viên tốt có cơ hội sinh con, nhưng kết quả còn phụ thuộc ngẫu nhiên.",
      "Đây là mô phỏng nâng cao, không thay bằng in cứng 37."
    ],
    "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cmath>\n#include <iomanip>\n#include <queue>\n#include <set>\n#include <numeric>\n#include <limits>\n#include <functional>\n#include <tuple>\n#include <cstdint>\nusing namespace std;\n\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\nuint32_t state;cin>>state;\n    auto random=[&](){state=1664525u*state+1013904223u;return state;};\n    auto unit=[&](){return random()/4294967296.0;};\n    auto fitness=[](int x){return 1000-(x-37)*(x-37);};\n    vector<int>pop(20);for(auto &x:pop)x=random()%101;\n    auto bestOf=[&](){int best=pop[0];for(int x:pop)if(fitness(x)>fitness(best))best=x;return best;};\n    auto select=[&](){int best=pop[random()%20];for(int j=1;j<3;j++){int x=pop[random()%20];if(fitness(x)>fitness(best))best=x;}return best;};\n    for(int generation=0;generation<100;generation++){\n        vector<int>next={bestOf()};\n        while(next.size()<20){int a=select(),b=select();\n            if(unit()<0.8){int k=1+random()%6,mask=(1<<k)-1;int lowA=a&mask,lowB=b&mask;a=(a&~mask)|lowB;b=(b&~mask)|lowA;}\n            for(int child:{a,b}){for(int bit=0;bit<7;bit++)if(unit()<0.02)child^=1<<bit;\n                child=max(0,min(100,child));if(next.size()<20)next.push_back(child);}\n        }\n        pop=next;\n    }\n    int best=bestOf();cout<<best<<' '<<fitness(best);\n    return 0;\n}\n",
    "tests": [
      {
        "name": "Seed khác",
        "input": "1",
        "expected": "37 1000"
      },
      {
        "name": "Seed 0",
        "input": "0",
        "expected": "37 1000"
      }
    ],
    "limit": "PDF chưa cố định bộ sinh ngẫu nhiên. Bản này quy ước LCG 32-bit (1664525,1013904223), lấy chỉ số bằng modulo, clamp con vào [0,100], phá hòa giữ ứng viên gặp trước. Test chỉ kiểm tra x hợp lệ và fitness tương ứng; không chứng minh bạn đã mô phỏng đủ 100 thế hệ."
  }
};
