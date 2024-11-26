const TestResult = () => {
  return (
    <div class="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div class="bg-white max-w-2xl w-full">
        <h1 class="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <div class="space-y-4">
          {/* 이 부분에서 모든 결과 map */}
          <div class="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
            <div class="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
              <h4 class="text-xl font-semibold">grace</h4>
              <p class="text-sm text-gray-400">2024. 11. 25. 오전 10:42:13</p>
            </div>
            <p class="text-2xl font-bold text-yellow-400 mb-4">ESTJ</p>
            <p class="text-base text-gray-300 mb-4">
              ESTJ: 체계적인 지휘관! ESTJ는 모든 것을 계획하고 조직하는 능력이
              탁월한 사람들입니다. 이들은 무엇이든 정확하게 처리하고 싶어하며,
              '제대로 된 절차가 있으면 모든 게 순조롭게 진행될 수 있어'라는
              믿음을 가지고 있어요. 그러나 가끔은 너무 엄격해서 주변 사람들이
              '조금만 느긋하게 지내면 안 될까?'라고 묻고 싶을 때가 있을지도
              몰라요. 그래도 이들은 확실히 모든 일을 끝내고야 마는 성격이에요.
            </p>
          </div>
          <div class="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
            <div class="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
              <h4 class="text-xl font-semibold">potato</h4>
              <p class="text-sm text-gray-400">2024. 11. 26. 오후 1:46:24</p>
            </div>
            <p class="text-2xl font-bold text-yellow-400 mb-4">ESTJ</p>
            <p class="text-base text-gray-300 mb-4">
              ESTJ: 체계적인 지휘관! ESTJ는 모든 것을 계획하고 조직하는 능력이
              탁월한 사람들입니다. 이들은 무엇이든 정확하게 처리하고 싶어하며,
              '제대로 된 절차가 있으면 모든 게 순조롭게 진행될 수 있어'라는
              믿음을 가지고 있어요. 그러나 가끔은 너무 엄격해서 주변 사람들이
              '조금만 느긋하게 지내면 안 될까?'라고 묻고 싶을 때가 있을지도
              몰라요. 그래도 이들은 확실히 모든 일을 끝내고야 마는 성격이에요.
            </p>
            <div class="flex justify-end space-x-4">
              <button class="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition">
                비공개로 전환
              </button>
              <button class="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
