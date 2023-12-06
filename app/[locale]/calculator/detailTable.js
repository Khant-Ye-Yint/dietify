import Image from 'next/image';

const DetailTable = ({ data }) => {
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
            <th>total fat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((chunk) => (
            <tr>
              <td>
                <div className="w-[50px] h-[50px] bg-transparent relative">
                  <Image
                    src={chunk.photo.thumb}
                    alt={chunk.food_name}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </td>
              <td>{chunk.serving_qty}</td>
              <td>{chunk.serving_unit}</td>
              <td className="font-bold text-verdigris">{chunk.food_name}</td>
              <td>{chunk.nf_calories} cal</td>
              <td>{chunk.serving_weight_grams} g</td>
              <td>{chunk.nf_total_fat} g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
