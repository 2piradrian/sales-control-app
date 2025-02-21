import { ReactNode, createContext, useContext, useMemo } from "react";
import { CategoryRepository, ProductRepository, StatusRepository } from "../../infrastructure";

interface RepositoriesProviderProps {
  children: ReactNode;
}

interface RepositoriesContextType {
  productRepository: ProductRepository;
  categoryRepository: CategoryRepository;
  statusRepository: StatusRepository;
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const repositories = useMemo(() => ({
    productRepository: new ProductRepository(),
    categoryRepository: new CategoryRepository(),
    statusRepository: new StatusRepository()
  }), []);

  return (
    <RepositoriesContext.Provider value={repositories}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
