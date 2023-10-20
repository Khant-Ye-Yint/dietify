const DetailTable = () => {
  return (
    <div className="overflow-x-auto w-[350px] md:w-[700px] lg:w-[800px]">
      <table className="w-full text-left border-separate table-auto border-spacing-5">
        <thead className="text-xl font-lobster">
          <tr>
            <th></th>
            <th>qty</th>
            <th>unit</th>
            <th>food</th>
            <th>calories</th>
            <th>weight</th>
            <th>food group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="w-[50px] h-[50px] bg-black"></div>
            </td>
            <td>3</td>
            <td>drummette</td>
            <td className="font-bold text-verdigris">chicken wings</td>
            <td>263.21 cal</td>
            <td>80.37 g</td>
            <td>combination</td>
          </tr>
          <tr>
            <td>
              <div className="w-[50px] h-[50px] bg-black"></div>
            </td>
            <td>3</td>
            <td>drummette</td>
            <td className="font-bold text-verdigris">chicken wings</td>
            <td>263.21 cal</td>
            <td>80.37 g</td>
            <td>combination</td>
          </tr>
          <tr>
            <td>
              <div className="w-[50px] h-[50px] bg-black"></div>
            </td>
            <td>3</td>
            <td>drummette</td>
            <td className="font-bold text-verdigris">chicken wings</td>
            <td>263.21 cal</td>
            <td>80.37 g</td>
            <td>combination</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
