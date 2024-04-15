import { CountryInput } from "../inputs/Country";
import { Country } from "../entities/country";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    const result = await Country.find();
    return result;
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country> {
    try {
      const result = await Country.findOne({
        where: {
          code: code,
        },
      });

      if (!result) {
        throw new Error(`Country with code ${code} not found`);
      }

      console.log(result);

      return result;
    } catch (err) {
      console.error("Error", err);
      throw new Error("An error occurred while reading one country");
    }
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("countryData") countryData: CountryInput
  ): Promise<Country> {
    const { name, code, emoji } = countryData;
    const country = await Country.create({ name, code, emoji }).save();
    return country;
  }
}
