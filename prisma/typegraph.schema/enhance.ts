import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  PrecioAlmacen: crudResolvers.PrecioAlmacenCrudResolver,
  PrecioVenta: crudResolvers.PrecioVentaCrudResolver,
  Origen: crudResolvers.OrigenCrudResolver,
  Categoria: crudResolvers.CategoriaCrudResolver,
  Subcategoria: crudResolvers.SubcategoriaCrudResolver,
  Estado: crudResolvers.EstadoCrudResolver,
  Marca: crudResolvers.MarcaCrudResolver,
  Cantidad: crudResolvers.CantidadCrudResolver,
  Traslado: crudResolvers.TrasladoCrudResolver,
  Producto: crudResolvers.ProductoCrudResolver,
  Sede: crudResolvers.SedeCrudResolver
};
const actionResolversMap = {
  PrecioAlmacen: {
    precioAlmacen: actionResolvers.FindUniquePrecioAlmacenResolver,
    findFirstPrecioAlmacen: actionResolvers.FindFirstPrecioAlmacenResolver,
    precioAlmacens: actionResolvers.FindManyPrecioAlmacenResolver,
    createPrecioAlmacen: actionResolvers.CreatePrecioAlmacenResolver,
    createManyPrecioAlmacen: actionResolvers.CreateManyPrecioAlmacenResolver,
    deletePrecioAlmacen: actionResolvers.DeletePrecioAlmacenResolver,
    updatePrecioAlmacen: actionResolvers.UpdatePrecioAlmacenResolver,
    deleteManyPrecioAlmacen: actionResolvers.DeleteManyPrecioAlmacenResolver,
    updateManyPrecioAlmacen: actionResolvers.UpdateManyPrecioAlmacenResolver,
    upsertPrecioAlmacen: actionResolvers.UpsertPrecioAlmacenResolver,
    aggregatePrecioAlmacen: actionResolvers.AggregatePrecioAlmacenResolver,
    groupByPrecioAlmacen: actionResolvers.GroupByPrecioAlmacenResolver
  },
  PrecioVenta: {
    precioVenta: actionResolvers.FindUniquePrecioVentaResolver,
    findFirstPrecioVenta: actionResolvers.FindFirstPrecioVentaResolver,
    precioVentas: actionResolvers.FindManyPrecioVentaResolver,
    createPrecioVenta: actionResolvers.CreatePrecioVentaResolver,
    createManyPrecioVenta: actionResolvers.CreateManyPrecioVentaResolver,
    deletePrecioVenta: actionResolvers.DeletePrecioVentaResolver,
    updatePrecioVenta: actionResolvers.UpdatePrecioVentaResolver,
    deleteManyPrecioVenta: actionResolvers.DeleteManyPrecioVentaResolver,
    updateManyPrecioVenta: actionResolvers.UpdateManyPrecioVentaResolver,
    upsertPrecioVenta: actionResolvers.UpsertPrecioVentaResolver,
    aggregatePrecioVenta: actionResolvers.AggregatePrecioVentaResolver,
    groupByPrecioVenta: actionResolvers.GroupByPrecioVentaResolver
  },
  Origen: {
    origen: actionResolvers.FindUniqueOrigenResolver,
    findFirstOrigen: actionResolvers.FindFirstOrigenResolver,
    origens: actionResolvers.FindManyOrigenResolver,
    createOrigen: actionResolvers.CreateOrigenResolver,
    createManyOrigen: actionResolvers.CreateManyOrigenResolver,
    deleteOrigen: actionResolvers.DeleteOrigenResolver,
    updateOrigen: actionResolvers.UpdateOrigenResolver,
    deleteManyOrigen: actionResolvers.DeleteManyOrigenResolver,
    updateManyOrigen: actionResolvers.UpdateManyOrigenResolver,
    upsertOrigen: actionResolvers.UpsertOrigenResolver,
    aggregateOrigen: actionResolvers.AggregateOrigenResolver,
    groupByOrigen: actionResolvers.GroupByOrigenResolver
  },
  Categoria: {
    categoria: actionResolvers.FindUniqueCategoriaResolver,
    findFirstCategoria: actionResolvers.FindFirstCategoriaResolver,
    categorias: actionResolvers.FindManyCategoriaResolver,
    createCategoria: actionResolvers.CreateCategoriaResolver,
    createManyCategoria: actionResolvers.CreateManyCategoriaResolver,
    deleteCategoria: actionResolvers.DeleteCategoriaResolver,
    updateCategoria: actionResolvers.UpdateCategoriaResolver,
    deleteManyCategoria: actionResolvers.DeleteManyCategoriaResolver,
    updateManyCategoria: actionResolvers.UpdateManyCategoriaResolver,
    upsertCategoria: actionResolvers.UpsertCategoriaResolver,
    aggregateCategoria: actionResolvers.AggregateCategoriaResolver,
    groupByCategoria: actionResolvers.GroupByCategoriaResolver
  },
  Subcategoria: {
    subcategoria: actionResolvers.FindUniqueSubcategoriaResolver,
    findFirstSubcategoria: actionResolvers.FindFirstSubcategoriaResolver,
    subcategorias: actionResolvers.FindManySubcategoriaResolver,
    createSubcategoria: actionResolvers.CreateSubcategoriaResolver,
    createManySubcategoria: actionResolvers.CreateManySubcategoriaResolver,
    deleteSubcategoria: actionResolvers.DeleteSubcategoriaResolver,
    updateSubcategoria: actionResolvers.UpdateSubcategoriaResolver,
    deleteManySubcategoria: actionResolvers.DeleteManySubcategoriaResolver,
    updateManySubcategoria: actionResolvers.UpdateManySubcategoriaResolver,
    upsertSubcategoria: actionResolvers.UpsertSubcategoriaResolver,
    aggregateSubcategoria: actionResolvers.AggregateSubcategoriaResolver,
    groupBySubcategoria: actionResolvers.GroupBySubcategoriaResolver
  },
  Estado: {
    estado: actionResolvers.FindUniqueEstadoResolver,
    findFirstEstado: actionResolvers.FindFirstEstadoResolver,
    estados: actionResolvers.FindManyEstadoResolver,
    createEstado: actionResolvers.CreateEstadoResolver,
    createManyEstado: actionResolvers.CreateManyEstadoResolver,
    deleteEstado: actionResolvers.DeleteEstadoResolver,
    updateEstado: actionResolvers.UpdateEstadoResolver,
    deleteManyEstado: actionResolvers.DeleteManyEstadoResolver,
    updateManyEstado: actionResolvers.UpdateManyEstadoResolver,
    upsertEstado: actionResolvers.UpsertEstadoResolver,
    aggregateEstado: actionResolvers.AggregateEstadoResolver,
    groupByEstado: actionResolvers.GroupByEstadoResolver
  },
  Marca: {
    marca: actionResolvers.FindUniqueMarcaResolver,
    findFirstMarca: actionResolvers.FindFirstMarcaResolver,
    marcas: actionResolvers.FindManyMarcaResolver,
    createMarca: actionResolvers.CreateMarcaResolver,
    createManyMarca: actionResolvers.CreateManyMarcaResolver,
    deleteMarca: actionResolvers.DeleteMarcaResolver,
    updateMarca: actionResolvers.UpdateMarcaResolver,
    deleteManyMarca: actionResolvers.DeleteManyMarcaResolver,
    updateManyMarca: actionResolvers.UpdateManyMarcaResolver,
    upsertMarca: actionResolvers.UpsertMarcaResolver,
    aggregateMarca: actionResolvers.AggregateMarcaResolver,
    groupByMarca: actionResolvers.GroupByMarcaResolver
  },
  Cantidad: {
    cantidad: actionResolvers.FindUniqueCantidadResolver,
    findFirstCantidad: actionResolvers.FindFirstCantidadResolver,
    cantidads: actionResolvers.FindManyCantidadResolver,
    createCantidad: actionResolvers.CreateCantidadResolver,
    createManyCantidad: actionResolvers.CreateManyCantidadResolver,
    deleteCantidad: actionResolvers.DeleteCantidadResolver,
    updateCantidad: actionResolvers.UpdateCantidadResolver,
    deleteManyCantidad: actionResolvers.DeleteManyCantidadResolver,
    updateManyCantidad: actionResolvers.UpdateManyCantidadResolver,
    upsertCantidad: actionResolvers.UpsertCantidadResolver,
    aggregateCantidad: actionResolvers.AggregateCantidadResolver,
    groupByCantidad: actionResolvers.GroupByCantidadResolver
  },
  Traslado: {
    traslado: actionResolvers.FindUniqueTrasladoResolver,
    findFirstTraslado: actionResolvers.FindFirstTrasladoResolver,
    traslados: actionResolvers.FindManyTrasladoResolver,
    createTraslado: actionResolvers.CreateTrasladoResolver,
    createManyTraslado: actionResolvers.CreateManyTrasladoResolver,
    deleteTraslado: actionResolvers.DeleteTrasladoResolver,
    updateTraslado: actionResolvers.UpdateTrasladoResolver,
    deleteManyTraslado: actionResolvers.DeleteManyTrasladoResolver,
    updateManyTraslado: actionResolvers.UpdateManyTrasladoResolver,
    upsertTraslado: actionResolvers.UpsertTrasladoResolver,
    aggregateTraslado: actionResolvers.AggregateTrasladoResolver,
    groupByTraslado: actionResolvers.GroupByTrasladoResolver
  },
  Producto: {
    producto: actionResolvers.FindUniqueProductoResolver,
    findFirstProducto: actionResolvers.FindFirstProductoResolver,
    productos: actionResolvers.FindManyProductoResolver,
    createProducto: actionResolvers.CreateProductoResolver,
    createManyProducto: actionResolvers.CreateManyProductoResolver,
    deleteProducto: actionResolvers.DeleteProductoResolver,
    updateProducto: actionResolvers.UpdateProductoResolver,
    deleteManyProducto: actionResolvers.DeleteManyProductoResolver,
    updateManyProducto: actionResolvers.UpdateManyProductoResolver,
    upsertProducto: actionResolvers.UpsertProductoResolver,
    aggregateProducto: actionResolvers.AggregateProductoResolver,
    groupByProducto: actionResolvers.GroupByProductoResolver
  },
  Sede: {
    sede: actionResolvers.FindUniqueSedeResolver,
    findFirstSede: actionResolvers.FindFirstSedeResolver,
    sedes: actionResolvers.FindManySedeResolver,
    createSede: actionResolvers.CreateSedeResolver,
    createManySede: actionResolvers.CreateManySedeResolver,
    deleteSede: actionResolvers.DeleteSedeResolver,
    updateSede: actionResolvers.UpdateSedeResolver,
    deleteManySede: actionResolvers.DeleteManySedeResolver,
    updateManySede: actionResolvers.UpdateManySedeResolver,
    upsertSede: actionResolvers.UpsertSedeResolver,
    aggregateSede: actionResolvers.AggregateSedeResolver,
    groupBySede: actionResolvers.GroupBySedeResolver
  }
};
const crudResolversInfo = {
  PrecioAlmacen: ["precioAlmacen", "findFirstPrecioAlmacen", "precioAlmacens", "createPrecioAlmacen", "createManyPrecioAlmacen", "deletePrecioAlmacen", "updatePrecioAlmacen", "deleteManyPrecioAlmacen", "updateManyPrecioAlmacen", "upsertPrecioAlmacen", "aggregatePrecioAlmacen", "groupByPrecioAlmacen"],
  PrecioVenta: ["precioVenta", "findFirstPrecioVenta", "precioVentas", "createPrecioVenta", "createManyPrecioVenta", "deletePrecioVenta", "updatePrecioVenta", "deleteManyPrecioVenta", "updateManyPrecioVenta", "upsertPrecioVenta", "aggregatePrecioVenta", "groupByPrecioVenta"],
  Origen: ["origen", "findFirstOrigen", "origens", "createOrigen", "createManyOrigen", "deleteOrigen", "updateOrigen", "deleteManyOrigen", "updateManyOrigen", "upsertOrigen", "aggregateOrigen", "groupByOrigen"],
  Categoria: ["categoria", "findFirstCategoria", "categorias", "createCategoria", "createManyCategoria", "deleteCategoria", "updateCategoria", "deleteManyCategoria", "updateManyCategoria", "upsertCategoria", "aggregateCategoria", "groupByCategoria"],
  Subcategoria: ["subcategoria", "findFirstSubcategoria", "subcategorias", "createSubcategoria", "createManySubcategoria", "deleteSubcategoria", "updateSubcategoria", "deleteManySubcategoria", "updateManySubcategoria", "upsertSubcategoria", "aggregateSubcategoria", "groupBySubcategoria"],
  Estado: ["estado", "findFirstEstado", "estados", "createEstado", "createManyEstado", "deleteEstado", "updateEstado", "deleteManyEstado", "updateManyEstado", "upsertEstado", "aggregateEstado", "groupByEstado"],
  Marca: ["marca", "findFirstMarca", "marcas", "createMarca", "createManyMarca", "deleteMarca", "updateMarca", "deleteManyMarca", "updateManyMarca", "upsertMarca", "aggregateMarca", "groupByMarca"],
  Cantidad: ["cantidad", "findFirstCantidad", "cantidads", "createCantidad", "createManyCantidad", "deleteCantidad", "updateCantidad", "deleteManyCantidad", "updateManyCantidad", "upsertCantidad", "aggregateCantidad", "groupByCantidad"],
  Traslado: ["traslado", "findFirstTraslado", "traslados", "createTraslado", "createManyTraslado", "deleteTraslado", "updateTraslado", "deleteManyTraslado", "updateManyTraslado", "upsertTraslado", "aggregateTraslado", "groupByTraslado"],
  Producto: ["producto", "findFirstProducto", "productos", "createProducto", "createManyProducto", "deleteProducto", "updateProducto", "deleteManyProducto", "updateManyProducto", "upsertProducto", "aggregateProducto", "groupByProducto"],
  Sede: ["sede", "findFirstSede", "sedes", "createSede", "createManySede", "deleteSede", "updateSede", "deleteManySede", "updateManySede", "upsertSede", "aggregateSede", "groupBySede"]
};
const argsInfo = {
  FindUniquePrecioAlmacenArgs: ["where"],
  FindFirstPrecioAlmacenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPrecioAlmacenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePrecioAlmacenArgs: ["data"],
  CreateManyPrecioAlmacenArgs: ["data", "skipDuplicates"],
  DeletePrecioAlmacenArgs: ["where"],
  UpdatePrecioAlmacenArgs: ["data", "where"],
  DeleteManyPrecioAlmacenArgs: ["where"],
  UpdateManyPrecioAlmacenArgs: ["data", "where"],
  UpsertPrecioAlmacenArgs: ["where", "create", "update"],
  AggregatePrecioAlmacenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPrecioAlmacenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePrecioVentaArgs: ["where"],
  FindFirstPrecioVentaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPrecioVentaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePrecioVentaArgs: ["data"],
  CreateManyPrecioVentaArgs: ["data", "skipDuplicates"],
  DeletePrecioVentaArgs: ["where"],
  UpdatePrecioVentaArgs: ["data", "where"],
  DeleteManyPrecioVentaArgs: ["where"],
  UpdateManyPrecioVentaArgs: ["data", "where"],
  UpsertPrecioVentaArgs: ["where", "create", "update"],
  AggregatePrecioVentaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPrecioVentaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrigenArgs: ["where"],
  FindFirstOrigenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrigenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrigenArgs: ["data"],
  CreateManyOrigenArgs: ["data", "skipDuplicates"],
  DeleteOrigenArgs: ["where"],
  UpdateOrigenArgs: ["data", "where"],
  DeleteManyOrigenArgs: ["where"],
  UpdateManyOrigenArgs: ["data", "where"],
  UpsertOrigenArgs: ["where", "create", "update"],
  AggregateOrigenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrigenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoriaArgs: ["where"],
  FindFirstCategoriaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoriaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoriaArgs: ["data"],
  CreateManyCategoriaArgs: ["data", "skipDuplicates"],
  DeleteCategoriaArgs: ["where"],
  UpdateCategoriaArgs: ["data", "where"],
  DeleteManyCategoriaArgs: ["where"],
  UpdateManyCategoriaArgs: ["data", "where"],
  UpsertCategoriaArgs: ["where", "create", "update"],
  AggregateCategoriaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoriaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSubcategoriaArgs: ["where"],
  FindFirstSubcategoriaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubcategoriaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSubcategoriaArgs: ["data"],
  CreateManySubcategoriaArgs: ["data", "skipDuplicates"],
  DeleteSubcategoriaArgs: ["where"],
  UpdateSubcategoriaArgs: ["data", "where"],
  DeleteManySubcategoriaArgs: ["where"],
  UpdateManySubcategoriaArgs: ["data", "where"],
  UpsertSubcategoriaArgs: ["where", "create", "update"],
  AggregateSubcategoriaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySubcategoriaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueEstadoArgs: ["where"],
  FindFirstEstadoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEstadoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateEstadoArgs: ["data"],
  CreateManyEstadoArgs: ["data", "skipDuplicates"],
  DeleteEstadoArgs: ["where"],
  UpdateEstadoArgs: ["data", "where"],
  DeleteManyEstadoArgs: ["where"],
  UpdateManyEstadoArgs: ["data", "where"],
  UpsertEstadoArgs: ["where", "create", "update"],
  AggregateEstadoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByEstadoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMarcaArgs: ["where"],
  FindFirstMarcaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMarcaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMarcaArgs: ["data"],
  CreateManyMarcaArgs: ["data", "skipDuplicates"],
  DeleteMarcaArgs: ["where"],
  UpdateMarcaArgs: ["data", "where"],
  DeleteManyMarcaArgs: ["where"],
  UpdateManyMarcaArgs: ["data", "where"],
  UpsertMarcaArgs: ["where", "create", "update"],
  AggregateMarcaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMarcaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCantidadArgs: ["where"],
  FindFirstCantidadArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCantidadArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCantidadArgs: ["data"],
  CreateManyCantidadArgs: ["data", "skipDuplicates"],
  DeleteCantidadArgs: ["where"],
  UpdateCantidadArgs: ["data", "where"],
  DeleteManyCantidadArgs: ["where"],
  UpdateManyCantidadArgs: ["data", "where"],
  UpsertCantidadArgs: ["where", "create", "update"],
  AggregateCantidadArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCantidadArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTrasladoArgs: ["where"],
  FindFirstTrasladoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTrasladoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTrasladoArgs: ["data"],
  CreateManyTrasladoArgs: ["data", "skipDuplicates"],
  DeleteTrasladoArgs: ["where"],
  UpdateTrasladoArgs: ["data", "where"],
  DeleteManyTrasladoArgs: ["where"],
  UpdateManyTrasladoArgs: ["data", "where"],
  UpsertTrasladoArgs: ["where", "create", "update"],
  AggregateTrasladoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTrasladoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProductoArgs: ["where"],
  FindFirstProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductoArgs: ["data"],
  CreateManyProductoArgs: ["data", "skipDuplicates"],
  DeleteProductoArgs: ["where"],
  UpdateProductoArgs: ["data", "where"],
  DeleteManyProductoArgs: ["where"],
  UpdateManyProductoArgs: ["data", "where"],
  UpsertProductoArgs: ["where", "create", "update"],
  AggregateProductoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSedeArgs: ["where"],
  FindFirstSedeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySedeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSedeArgs: ["data"],
  CreateManySedeArgs: ["data", "skipDuplicates"],
  DeleteSedeArgs: ["where"],
  UpdateSedeArgs: ["data", "where"],
  DeleteManySedeArgs: ["where"],
  UpdateManySedeArgs: ["data", "where"],
  UpsertSedeArgs: ["where", "create", "update"],
  AggregateSedeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySedeArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  PrecioAlmacen: relationResolvers.PrecioAlmacenRelationsResolver,
  PrecioVenta: relationResolvers.PrecioVentaRelationsResolver,
  Origen: relationResolvers.OrigenRelationsResolver,
  Categoria: relationResolvers.CategoriaRelationsResolver,
  Subcategoria: relationResolvers.SubcategoriaRelationsResolver,
  Estado: relationResolvers.EstadoRelationsResolver,
  Marca: relationResolvers.MarcaRelationsResolver,
  Cantidad: relationResolvers.CantidadRelationsResolver,
  Traslado: relationResolvers.TrasladoRelationsResolver,
  Producto: relationResolvers.ProductoRelationsResolver,
  Sede: relationResolvers.SedeRelationsResolver
};
const relationResolversInfo = {
  PrecioAlmacen: ["producto"],
  PrecioVenta: ["producto"],
  Origen: ["producto"],
  Categoria: ["subcategoria", "producto"],
  Subcategoria: ["categoria", "Producto"],
  Estado: ["sedes"],
  Marca: ["Producto"],
  Cantidad: ["sede", "producto"],
  Traslado: ["sede", "sedeOrigen", "sedeDestino"],
  Producto: ["Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  Sede: ["estado", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  PrecioAlmacen: ["id", "rmb", "cif", "mnj"],
  PrecioVenta: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  Origen: ["id", "nombre", "porcentaje"],
  Categoria: ["id", "nombre"],
  Subcategoria: ["id", "nombre", "categoriaId"],
  Estado: ["id", "nombre"],
  Marca: ["id", "nombre"],
  Cantidad: ["id", "cantidad", "sedeId", "productoId"],
  Traslado: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  Producto: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  Sede: ["id", "nombre", "estadoId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePrecioAlmacen: ["_count", "_avg", "_sum", "_min", "_max"],
  PrecioAlmacenGroupBy: ["id", "rmb", "cif", "mnj", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePrecioVenta: ["_count", "_avg", "_sum", "_min", "_max"],
  PrecioVentaGroupBy: ["id", "a", "aa", "aaa", "detal", "instalacion", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrigen: ["_count", "_avg", "_sum", "_min", "_max"],
  OrigenGroupBy: ["id", "nombre", "porcentaje", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategoria: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoriaGroupBy: ["id", "nombre", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSubcategoria: ["_count", "_avg", "_sum", "_min", "_max"],
  SubcategoriaGroupBy: ["id", "nombre", "categoriaId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEstado: ["_count", "_avg", "_sum", "_min", "_max"],
  EstadoGroupBy: ["id", "nombre", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMarca: ["_count", "_avg", "_sum", "_min", "_max"],
  MarcaGroupBy: ["id", "nombre", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCantidad: ["_count", "_avg", "_sum", "_min", "_max"],
  CantidadGroupBy: ["id", "cantidad", "sedeId", "productoId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTraslado: ["_count", "_avg", "_sum", "_min", "_max"],
  TrasladoGroupBy: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProducto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductoGroupBy: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSede: ["_count", "_avg", "_sum", "_min", "_max"],
  SedeGroupBy: ["id", "nombre", "estadoId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PrecioAlmacenCount: ["producto"],
  PrecioAlmacenCountAggregate: ["id", "rmb", "cif", "mnj", "_all"],
  PrecioAlmacenAvgAggregate: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenSumAggregate: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenMinAggregate: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenMaxAggregate: ["id", "rmb", "cif", "mnj"],
  PrecioVentaCount: ["producto"],
  PrecioVentaCountAggregate: ["id", "a", "aa", "aaa", "detal", "instalacion", "_all"],
  PrecioVentaAvgAggregate: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaSumAggregate: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaMinAggregate: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaMaxAggregate: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  OrigenCount: ["producto"],
  OrigenCountAggregate: ["id", "nombre", "porcentaje", "_all"],
  OrigenAvgAggregate: ["id", "porcentaje"],
  OrigenSumAggregate: ["id", "porcentaje"],
  OrigenMinAggregate: ["id", "nombre", "porcentaje"],
  OrigenMaxAggregate: ["id", "nombre", "porcentaje"],
  CategoriaCount: ["subcategoria", "producto"],
  CategoriaCountAggregate: ["id", "nombre", "_all"],
  CategoriaAvgAggregate: ["id"],
  CategoriaSumAggregate: ["id"],
  CategoriaMinAggregate: ["id", "nombre"],
  CategoriaMaxAggregate: ["id", "nombre"],
  SubcategoriaCount: ["Producto"],
  SubcategoriaCountAggregate: ["id", "nombre", "categoriaId", "_all"],
  SubcategoriaAvgAggregate: ["id", "categoriaId"],
  SubcategoriaSumAggregate: ["id", "categoriaId"],
  SubcategoriaMinAggregate: ["id", "nombre", "categoriaId"],
  SubcategoriaMaxAggregate: ["id", "nombre", "categoriaId"],
  EstadoCount: ["sedes"],
  EstadoCountAggregate: ["id", "nombre", "_all"],
  EstadoAvgAggregate: ["id"],
  EstadoSumAggregate: ["id"],
  EstadoMinAggregate: ["id", "nombre"],
  EstadoMaxAggregate: ["id", "nombre"],
  MarcaCount: ["Producto"],
  MarcaCountAggregate: ["id", "nombre", "_all"],
  MarcaAvgAggregate: ["id"],
  MarcaSumAggregate: ["id"],
  MarcaMinAggregate: ["id", "nombre"],
  MarcaMaxAggregate: ["id", "nombre"],
  CantidadCountAggregate: ["id", "cantidad", "sedeId", "productoId", "_all"],
  CantidadAvgAggregate: ["id", "cantidad", "sedeId", "productoId"],
  CantidadSumAggregate: ["id", "cantidad", "sedeId", "productoId"],
  CantidadMinAggregate: ["id", "cantidad", "sedeId", "productoId"],
  CantidadMaxAggregate: ["id", "cantidad", "sedeId", "productoId"],
  TrasladoCountAggregate: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId", "_all"],
  TrasladoAvgAggregate: ["id", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoSumAggregate: ["id", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoMinAggregate: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoMaxAggregate: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  ProductoCount: ["Cantidad"],
  ProductoCountAggregate: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId", "_all"],
  ProductoAvgAggregate: ["id", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoSumAggregate: ["id", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoMinAggregate: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoMaxAggregate: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  SedeCount: ["movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeCountAggregate: ["id", "nombre", "estadoId", "_all"],
  SedeAvgAggregate: ["id", "estadoId"],
  SedeSumAggregate: ["id", "estadoId"],
  SedeMinAggregate: ["id", "nombre", "estadoId"],
  SedeMaxAggregate: ["id", "nombre", "estadoId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PrecioAlmacenWhereInput: ["AND", "OR", "NOT", "id", "rmb", "cif", "mnj", "producto"],
  PrecioAlmacenOrderByWithRelationInput: ["id", "rmb", "cif", "mnj", "producto"],
  PrecioAlmacenWhereUniqueInput: ["id"],
  PrecioAlmacenOrderByWithAggregationInput: ["id", "rmb", "cif", "mnj", "_count", "_avg", "_max", "_min", "_sum"],
  PrecioAlmacenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rmb", "cif", "mnj"],
  PrecioVentaWhereInput: ["AND", "OR", "NOT", "id", "a", "aa", "aaa", "detal", "instalacion", "producto"],
  PrecioVentaOrderByWithRelationInput: ["id", "a", "aa", "aaa", "detal", "instalacion", "producto"],
  PrecioVentaWhereUniqueInput: ["id"],
  PrecioVentaOrderByWithAggregationInput: ["id", "a", "aa", "aaa", "detal", "instalacion", "_count", "_avg", "_max", "_min", "_sum"],
  PrecioVentaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "a", "aa", "aaa", "detal", "instalacion"],
  OrigenWhereInput: ["AND", "OR", "NOT", "id", "nombre", "porcentaje", "producto"],
  OrigenOrderByWithRelationInput: ["id", "nombre", "porcentaje", "producto"],
  OrigenWhereUniqueInput: ["id"],
  OrigenOrderByWithAggregationInput: ["id", "nombre", "porcentaje", "_count", "_avg", "_max", "_min", "_sum"],
  OrigenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "porcentaje"],
  CategoriaWhereInput: ["AND", "OR", "NOT", "id", "nombre", "subcategoria", "producto"],
  CategoriaOrderByWithRelationInput: ["id", "nombre", "subcategoria", "producto"],
  CategoriaWhereUniqueInput: ["id"],
  CategoriaOrderByWithAggregationInput: ["id", "nombre", "_count", "_avg", "_max", "_min", "_sum"],
  CategoriaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre"],
  SubcategoriaWhereInput: ["AND", "OR", "NOT", "id", "nombre", "categoriaId", "categoria", "Producto"],
  SubcategoriaOrderByWithRelationInput: ["id", "nombre", "categoriaId", "categoria", "Producto"],
  SubcategoriaWhereUniqueInput: ["id"],
  SubcategoriaOrderByWithAggregationInput: ["id", "nombre", "categoriaId", "_count", "_avg", "_max", "_min", "_sum"],
  SubcategoriaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "categoriaId"],
  EstadoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "sedes"],
  EstadoOrderByWithRelationInput: ["id", "nombre", "sedes"],
  EstadoWhereUniqueInput: ["id"],
  EstadoOrderByWithAggregationInput: ["id", "nombre", "_count", "_avg", "_max", "_min", "_sum"],
  EstadoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre"],
  MarcaWhereInput: ["AND", "OR", "NOT", "id", "nombre", "Producto"],
  MarcaOrderByWithRelationInput: ["id", "nombre", "Producto"],
  MarcaWhereUniqueInput: ["id"],
  MarcaOrderByWithAggregationInput: ["id", "nombre", "_count", "_avg", "_max", "_min", "_sum"],
  MarcaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre"],
  CantidadWhereInput: ["AND", "OR", "NOT", "id", "cantidad", "sedeId", "productoId", "sede", "producto"],
  CantidadOrderByWithRelationInput: ["id", "cantidad", "sedeId", "productoId", "sede", "producto"],
  CantidadWhereUniqueInput: ["id"],
  CantidadOrderByWithAggregationInput: ["id", "cantidad", "sedeId", "productoId", "_count", "_avg", "_max", "_min", "_sum"],
  CantidadScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cantidad", "sedeId", "productoId"],
  TrasladoWhereInput: ["AND", "OR", "NOT", "id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId", "sede", "sedeOrigen", "sedeDestino"],
  TrasladoOrderByWithRelationInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId", "sede", "sedeOrigen", "sedeDestino"],
  TrasladoWhereUniqueInput: ["id"],
  TrasladoOrderByWithAggregationInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId", "_count", "_avg", "_max", "_min", "_sum"],
  TrasladoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  ProductoWhereInput: ["AND", "OR", "NOT", "id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoOrderByWithRelationInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoWhereUniqueInput: ["id"],
  ProductoOrderByWithAggregationInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId", "_count", "_avg", "_max", "_min", "_sum"],
  ProductoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  SedeWhereInput: ["AND", "OR", "NOT", "id", "nombre", "estadoId", "estado", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeOrderByWithRelationInput: ["id", "nombre", "estadoId", "estado", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeWhereUniqueInput: ["id"],
  SedeOrderByWithAggregationInput: ["id", "nombre", "estadoId", "_count", "_avg", "_max", "_min", "_sum"],
  SedeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "estadoId"],
  PrecioAlmacenCreateInput: ["rmb", "cif", "mnj", "producto"],
  PrecioAlmacenUpdateInput: ["rmb", "cif", "mnj", "producto"],
  PrecioAlmacenCreateManyInput: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenUpdateManyMutationInput: ["rmb", "cif", "mnj"],
  PrecioVentaCreateInput: ["a", "aa", "aaa", "detal", "instalacion", "producto"],
  PrecioVentaUpdateInput: ["a", "aa", "aaa", "detal", "instalacion", "producto"],
  PrecioVentaCreateManyInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaUpdateManyMutationInput: ["a", "aa", "aaa", "detal", "instalacion"],
  OrigenCreateInput: ["nombre", "porcentaje", "producto"],
  OrigenUpdateInput: ["nombre", "porcentaje", "producto"],
  OrigenCreateManyInput: ["id", "nombre", "porcentaje"],
  OrigenUpdateManyMutationInput: ["nombre", "porcentaje"],
  CategoriaCreateInput: ["nombre", "subcategoria", "producto"],
  CategoriaUpdateInput: ["nombre", "subcategoria", "producto"],
  CategoriaCreateManyInput: ["id", "nombre"],
  CategoriaUpdateManyMutationInput: ["nombre"],
  SubcategoriaCreateInput: ["nombre", "categoria", "Producto"],
  SubcategoriaUpdateInput: ["nombre", "categoria", "Producto"],
  SubcategoriaCreateManyInput: ["id", "nombre", "categoriaId"],
  SubcategoriaUpdateManyMutationInput: ["nombre"],
  EstadoCreateInput: ["nombre", "sedes"],
  EstadoUpdateInput: ["nombre", "sedes"],
  EstadoCreateManyInput: ["id", "nombre"],
  EstadoUpdateManyMutationInput: ["nombre"],
  MarcaCreateInput: ["nombre", "Producto"],
  MarcaUpdateInput: ["nombre", "Producto"],
  MarcaCreateManyInput: ["id", "nombre"],
  MarcaUpdateManyMutationInput: ["nombre"],
  CantidadCreateInput: ["cantidad", "sede", "producto"],
  CantidadUpdateInput: ["cantidad", "sede", "producto"],
  CantidadCreateManyInput: ["id", "cantidad", "sedeId", "productoId"],
  CantidadUpdateManyMutationInput: ["cantidad"],
  TrasladoCreateInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeOrigen", "sedeDestino"],
  TrasladoUpdateInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeOrigen", "sedeDestino"],
  TrasladoCreateManyInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoUpdateManyMutationInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion"],
  ProductoCreateInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoUpdateInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateManyInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoUpdateManyMutationInput: ["modelo", "foto", "cuenta", "retirado", "cantidad"],
  SedeCreateInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeUpdateInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeCreateManyInput: ["id", "nombre", "estadoId"],
  SedeUpdateManyMutationInput: ["nombre"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProductoListRelationFilter: ["every", "some", "none"],
  ProductoOrderByRelationAggregateInput: ["_count"],
  PrecioAlmacenCountOrderByAggregateInput: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenAvgOrderByAggregateInput: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenMaxOrderByAggregateInput: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenMinOrderByAggregateInput: ["id", "rmb", "cif", "mnj"],
  PrecioAlmacenSumOrderByAggregateInput: ["id", "rmb", "cif", "mnj"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PrecioVentaCountOrderByAggregateInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaAvgOrderByAggregateInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaMaxOrderByAggregateInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaMinOrderByAggregateInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaSumOrderByAggregateInput: ["id", "a", "aa", "aaa", "detal", "instalacion"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  OrigenCountOrderByAggregateInput: ["id", "nombre", "porcentaje"],
  OrigenAvgOrderByAggregateInput: ["id", "porcentaje"],
  OrigenMaxOrderByAggregateInput: ["id", "nombre", "porcentaje"],
  OrigenMinOrderByAggregateInput: ["id", "nombre", "porcentaje"],
  OrigenSumOrderByAggregateInput: ["id", "porcentaje"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  SubcategoriaListRelationFilter: ["every", "some", "none"],
  SubcategoriaOrderByRelationAggregateInput: ["_count"],
  CategoriaCountOrderByAggregateInput: ["id", "nombre"],
  CategoriaAvgOrderByAggregateInput: ["id"],
  CategoriaMaxOrderByAggregateInput: ["id", "nombre"],
  CategoriaMinOrderByAggregateInput: ["id", "nombre"],
  CategoriaSumOrderByAggregateInput: ["id"],
  CategoriaRelationFilter: ["is", "isNot"],
  SubcategoriaCountOrderByAggregateInput: ["id", "nombre", "categoriaId"],
  SubcategoriaAvgOrderByAggregateInput: ["id", "categoriaId"],
  SubcategoriaMaxOrderByAggregateInput: ["id", "nombre", "categoriaId"],
  SubcategoriaMinOrderByAggregateInput: ["id", "nombre", "categoriaId"],
  SubcategoriaSumOrderByAggregateInput: ["id", "categoriaId"],
  SedeListRelationFilter: ["every", "some", "none"],
  SedeOrderByRelationAggregateInput: ["_count"],
  EstadoCountOrderByAggregateInput: ["id", "nombre"],
  EstadoAvgOrderByAggregateInput: ["id"],
  EstadoMaxOrderByAggregateInput: ["id", "nombre"],
  EstadoMinOrderByAggregateInput: ["id", "nombre"],
  EstadoSumOrderByAggregateInput: ["id"],
  MarcaCountOrderByAggregateInput: ["id", "nombre"],
  MarcaAvgOrderByAggregateInput: ["id"],
  MarcaMaxOrderByAggregateInput: ["id", "nombre"],
  MarcaMinOrderByAggregateInput: ["id", "nombre"],
  MarcaSumOrderByAggregateInput: ["id"],
  SedeRelationFilter: ["is", "isNot"],
  ProductoRelationFilter: ["is", "isNot"],
  CantidadCountOrderByAggregateInput: ["id", "cantidad", "sedeId", "productoId"],
  CantidadAvgOrderByAggregateInput: ["id", "cantidad", "sedeId", "productoId"],
  CantidadMaxOrderByAggregateInput: ["id", "cantidad", "sedeId", "productoId"],
  CantidadMinOrderByAggregateInput: ["id", "cantidad", "sedeId", "productoId"],
  CantidadSumOrderByAggregateInput: ["id", "cantidad", "sedeId", "productoId"],
  BoolFilter: ["equals", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TrasladoCountOrderByAggregateInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoAvgOrderByAggregateInput: ["id", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoMaxOrderByAggregateInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoMinOrderByAggregateInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoSumOrderByAggregateInput: ["id", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CantidadListRelationFilter: ["every", "some", "none"],
  MarcaRelationFilter: ["is", "isNot"],
  OrigenRelationFilter: ["is", "isNot"],
  SubcategoriaRelationFilter: ["is", "isNot"],
  PrecioVentaRelationFilter: ["is", "isNot"],
  PrecioAlmacenRelationFilter: ["is", "isNot"],
  CantidadOrderByRelationAggregateInput: ["_count"],
  ProductoCountOrderByAggregateInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoAvgOrderByAggregateInput: ["id", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoMaxOrderByAggregateInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoMinOrderByAggregateInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoSumOrderByAggregateInput: ["id", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EstadoRelationFilter: ["is", "isNot"],
  TrasladoListRelationFilter: ["every", "some", "none"],
  TrasladoOrderByRelationAggregateInput: ["_count"],
  SedeCountOrderByAggregateInput: ["id", "nombre", "estadoId"],
  SedeAvgOrderByAggregateInput: ["id", "estadoId"],
  SedeMaxOrderByAggregateInput: ["id", "nombre", "estadoId"],
  SedeMinOrderByAggregateInput: ["id", "nombre", "estadoId"],
  SedeSumOrderByAggregateInput: ["id", "estadoId"],
  ProductoCreateNestedManyWithoutPrecioAlmacenInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProductoUpdateManyWithoutPrecioAlmacenInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProductoCreateNestedManyWithoutPrecioVentaInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductoUpdateManyWithoutPrecioVentaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductoCreateNestedManyWithoutOrigenInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  ProductoUpdateManyWithoutOrigenInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SubcategoriaCreateNestedManyWithoutCategoriaInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductoCreateNestedManyWithoutCategoriaInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubcategoriaUpdateManyWithoutCategoriaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductoUpdateManyWithoutCategoriaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoriaCreateNestedOneWithoutSubcategoriaInput: ["create", "connectOrCreate", "connect"],
  ProductoCreateNestedManyWithoutSubcategoriaInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoriaUpdateOneRequiredWithoutSubcategoriaInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductoUpdateManyWithoutSubcategoriaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SedeCreateNestedManyWithoutEstadoInput: ["create", "connectOrCreate", "createMany", "connect"],
  SedeUpdateManyWithoutEstadoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductoCreateNestedManyWithoutMarcaInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductoUpdateManyWithoutMarcaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SedeCreateNestedOneWithoutCantidadInput: ["create", "connectOrCreate", "connect"],
  ProductoCreateNestedOneWithoutCantidadInput: ["create", "connectOrCreate", "connect"],
  SedeUpdateOneRequiredWithoutCantidadInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductoUpdateOneRequiredWithoutCantidadInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SedeCreateNestedOneWithoutTrasladosInput: ["create", "connectOrCreate", "connect"],
  SedeCreateNestedOneWithoutMovimientosOrigenInput: ["create", "connectOrCreate", "connect"],
  SedeCreateNestedOneWithoutMovimientosDestinoInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  SedeUpdateOneRequiredWithoutTrasladosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SedeUpdateOneRequiredWithoutMovimientosOrigenInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SedeUpdateOneRequiredWithoutMovimientosDestinoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CantidadCreateNestedManyWithoutProductoInput: ["create", "connectOrCreate", "createMany", "connect"],
  MarcaCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  OrigenCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  CategoriaCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  SubcategoriaCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  PrecioVentaCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  PrecioAlmacenCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CantidadUpdateManyWithoutProductoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MarcaUpdateOneWithoutProductoInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  OrigenUpdateOneRequiredWithoutProductoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CategoriaUpdateOneRequiredWithoutProductoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SubcategoriaUpdateOneWithoutProductoInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PrecioVentaUpdateOneRequiredWithoutProductoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PrecioAlmacenUpdateOneRequiredWithoutProductoInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EstadoCreateNestedOneWithoutSedesInput: ["create", "connectOrCreate", "connect"],
  TrasladoCreateNestedManyWithoutSedeDestinoInput: ["create", "connectOrCreate", "createMany", "connect"],
  TrasladoCreateNestedManyWithoutSedeOrigenInput: ["create", "connectOrCreate", "createMany", "connect"],
  TrasladoCreateNestedManyWithoutSedeInput: ["create", "connectOrCreate", "createMany", "connect"],
  CantidadCreateNestedManyWithoutSedeInput: ["create", "connectOrCreate", "createMany", "connect"],
  EstadoUpdateOneRequiredWithoutSedesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TrasladoUpdateManyWithoutSedeDestinoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TrasladoUpdateManyWithoutSedeOrigenInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TrasladoUpdateManyWithoutSedeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CantidadUpdateManyWithoutSedeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProductoCreateWithoutPrecioAlmacenInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta"],
  ProductoCreateOrConnectWithoutPrecioAlmacenInput: ["where", "create"],
  ProductoCreateManyPrecioAlmacenInputEnvelope: ["data", "skipDuplicates"],
  ProductoUpsertWithWhereUniqueWithoutPrecioAlmacenInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutPrecioAlmacenInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutPrecioAlmacenInput: ["where", "data"],
  ProductoScalarWhereInput: ["AND", "OR", "NOT", "id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoCreateWithoutPrecioVentaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioAlmacen"],
  ProductoCreateOrConnectWithoutPrecioVentaInput: ["where", "create"],
  ProductoCreateManyPrecioVentaInputEnvelope: ["data", "skipDuplicates"],
  ProductoUpsertWithWhereUniqueWithoutPrecioVentaInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutPrecioVentaInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutPrecioVentaInput: ["where", "data"],
  ProductoCreateWithoutOrigenInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateOrConnectWithoutOrigenInput: ["where", "create"],
  ProductoCreateManyOrigenInputEnvelope: ["data", "skipDuplicates"],
  ProductoUpsertWithWhereUniqueWithoutOrigenInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutOrigenInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutOrigenInput: ["where", "data"],
  SubcategoriaCreateWithoutCategoriaInput: ["nombre", "Producto"],
  SubcategoriaCreateOrConnectWithoutCategoriaInput: ["where", "create"],
  SubcategoriaCreateManyCategoriaInputEnvelope: ["data", "skipDuplicates"],
  ProductoCreateWithoutCategoriaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateOrConnectWithoutCategoriaInput: ["where", "create"],
  ProductoCreateManyCategoriaInputEnvelope: ["data", "skipDuplicates"],
  SubcategoriaUpsertWithWhereUniqueWithoutCategoriaInput: ["where", "update", "create"],
  SubcategoriaUpdateWithWhereUniqueWithoutCategoriaInput: ["where", "data"],
  SubcategoriaUpdateManyWithWhereWithoutCategoriaInput: ["where", "data"],
  SubcategoriaScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "categoriaId"],
  ProductoUpsertWithWhereUniqueWithoutCategoriaInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutCategoriaInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutCategoriaInput: ["where", "data"],
  CategoriaCreateWithoutSubcategoriaInput: ["nombre", "producto"],
  CategoriaCreateOrConnectWithoutSubcategoriaInput: ["where", "create"],
  ProductoCreateWithoutSubcategoriaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "precioVenta", "precioAlmacen"],
  ProductoCreateOrConnectWithoutSubcategoriaInput: ["where", "create"],
  ProductoCreateManySubcategoriaInputEnvelope: ["data", "skipDuplicates"],
  CategoriaUpsertWithoutSubcategoriaInput: ["update", "create"],
  CategoriaUpdateWithoutSubcategoriaInput: ["nombre", "producto"],
  ProductoUpsertWithWhereUniqueWithoutSubcategoriaInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutSubcategoriaInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutSubcategoriaInput: ["where", "data"],
  SedeCreateWithoutEstadoInput: ["nombre", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  SedeCreateOrConnectWithoutEstadoInput: ["where", "create"],
  SedeCreateManyEstadoInputEnvelope: ["data", "skipDuplicates"],
  SedeUpsertWithWhereUniqueWithoutEstadoInput: ["where", "update", "create"],
  SedeUpdateWithWhereUniqueWithoutEstadoInput: ["where", "data"],
  SedeUpdateManyWithWhereWithoutEstadoInput: ["where", "data"],
  SedeScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "estadoId"],
  ProductoCreateWithoutMarcaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateOrConnectWithoutMarcaInput: ["where", "create"],
  ProductoCreateManyMarcaInputEnvelope: ["data", "skipDuplicates"],
  ProductoUpsertWithWhereUniqueWithoutMarcaInput: ["where", "update", "create"],
  ProductoUpdateWithWhereUniqueWithoutMarcaInput: ["where", "data"],
  ProductoUpdateManyWithWhereWithoutMarcaInput: ["where", "data"],
  SedeCreateWithoutCantidadInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "traslados"],
  SedeCreateOrConnectWithoutCantidadInput: ["where", "create"],
  ProductoCreateWithoutCantidadInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateOrConnectWithoutCantidadInput: ["where", "create"],
  SedeUpsertWithoutCantidadInput: ["update", "create"],
  SedeUpdateWithoutCantidadInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "traslados"],
  ProductoUpsertWithoutCantidadInput: ["update", "create"],
  ProductoUpdateWithoutCantidadInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  SedeCreateWithoutTrasladosInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "Cantidad"],
  SedeCreateOrConnectWithoutTrasladosInput: ["where", "create"],
  SedeCreateWithoutMovimientosOrigenInput: ["nombre", "estado", "movimientosDestino", "traslados", "Cantidad"],
  SedeCreateOrConnectWithoutMovimientosOrigenInput: ["where", "create"],
  SedeCreateWithoutMovimientosDestinoInput: ["nombre", "estado", "movimientosOrigen", "traslados", "Cantidad"],
  SedeCreateOrConnectWithoutMovimientosDestinoInput: ["where", "create"],
  SedeUpsertWithoutTrasladosInput: ["update", "create"],
  SedeUpdateWithoutTrasladosInput: ["nombre", "estado", "movimientosDestino", "movimientosOrigen", "Cantidad"],
  SedeUpsertWithoutMovimientosOrigenInput: ["update", "create"],
  SedeUpdateWithoutMovimientosOrigenInput: ["nombre", "estado", "movimientosDestino", "traslados", "Cantidad"],
  SedeUpsertWithoutMovimientosDestinoInput: ["update", "create"],
  SedeUpdateWithoutMovimientosDestinoInput: ["nombre", "estado", "movimientosOrigen", "traslados", "Cantidad"],
  CantidadCreateWithoutProductoInput: ["cantidad", "sede"],
  CantidadCreateOrConnectWithoutProductoInput: ["where", "create"],
  CantidadCreateManyProductoInputEnvelope: ["data", "skipDuplicates"],
  MarcaCreateWithoutProductoInput: ["nombre"],
  MarcaCreateOrConnectWithoutProductoInput: ["where", "create"],
  OrigenCreateWithoutProductoInput: ["nombre", "porcentaje"],
  OrigenCreateOrConnectWithoutProductoInput: ["where", "create"],
  CategoriaCreateWithoutProductoInput: ["nombre", "subcategoria"],
  CategoriaCreateOrConnectWithoutProductoInput: ["where", "create"],
  SubcategoriaCreateWithoutProductoInput: ["nombre", "categoria"],
  SubcategoriaCreateOrConnectWithoutProductoInput: ["where", "create"],
  PrecioVentaCreateWithoutProductoInput: ["a", "aa", "aaa", "detal", "instalacion"],
  PrecioVentaCreateOrConnectWithoutProductoInput: ["where", "create"],
  PrecioAlmacenCreateWithoutProductoInput: ["rmb", "cif", "mnj"],
  PrecioAlmacenCreateOrConnectWithoutProductoInput: ["where", "create"],
  CantidadUpsertWithWhereUniqueWithoutProductoInput: ["where", "update", "create"],
  CantidadUpdateWithWhereUniqueWithoutProductoInput: ["where", "data"],
  CantidadUpdateManyWithWhereWithoutProductoInput: ["where", "data"],
  CantidadScalarWhereInput: ["AND", "OR", "NOT", "id", "cantidad", "sedeId", "productoId"],
  MarcaUpsertWithoutProductoInput: ["update", "create"],
  MarcaUpdateWithoutProductoInput: ["nombre"],
  OrigenUpsertWithoutProductoInput: ["update", "create"],
  OrigenUpdateWithoutProductoInput: ["nombre", "porcentaje"],
  CategoriaUpsertWithoutProductoInput: ["update", "create"],
  CategoriaUpdateWithoutProductoInput: ["nombre", "subcategoria"],
  SubcategoriaUpsertWithoutProductoInput: ["update", "create"],
  SubcategoriaUpdateWithoutProductoInput: ["nombre", "categoria"],
  PrecioVentaUpsertWithoutProductoInput: ["update", "create"],
  PrecioVentaUpdateWithoutProductoInput: ["a", "aa", "aaa", "detal", "instalacion"],
  PrecioAlmacenUpsertWithoutProductoInput: ["update", "create"],
  PrecioAlmacenUpdateWithoutProductoInput: ["rmb", "cif", "mnj"],
  EstadoCreateWithoutSedesInput: ["nombre"],
  EstadoCreateOrConnectWithoutSedesInput: ["where", "create"],
  TrasladoCreateWithoutSedeDestinoInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeOrigen"],
  TrasladoCreateOrConnectWithoutSedeDestinoInput: ["where", "create"],
  TrasladoCreateManySedeDestinoInputEnvelope: ["data", "skipDuplicates"],
  TrasladoCreateWithoutSedeOrigenInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeDestino"],
  TrasladoCreateOrConnectWithoutSedeOrigenInput: ["where", "create"],
  TrasladoCreateManySedeOrigenInputEnvelope: ["data", "skipDuplicates"],
  TrasladoCreateWithoutSedeInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeOrigen", "sedeDestino"],
  TrasladoCreateOrConnectWithoutSedeInput: ["where", "create"],
  TrasladoCreateManySedeInputEnvelope: ["data", "skipDuplicates"],
  CantidadCreateWithoutSedeInput: ["cantidad", "producto"],
  CantidadCreateOrConnectWithoutSedeInput: ["where", "create"],
  CantidadCreateManySedeInputEnvelope: ["data", "skipDuplicates"],
  EstadoUpsertWithoutSedesInput: ["update", "create"],
  EstadoUpdateWithoutSedesInput: ["nombre"],
  TrasladoUpsertWithWhereUniqueWithoutSedeDestinoInput: ["where", "update", "create"],
  TrasladoUpdateWithWhereUniqueWithoutSedeDestinoInput: ["where", "data"],
  TrasladoUpdateManyWithWhereWithoutSedeDestinoInput: ["where", "data"],
  TrasladoScalarWhereInput: ["AND", "OR", "NOT", "id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId", "sedeDestinoId"],
  TrasladoUpsertWithWhereUniqueWithoutSedeOrigenInput: ["where", "update", "create"],
  TrasladoUpdateWithWhereUniqueWithoutSedeOrigenInput: ["where", "data"],
  TrasladoUpdateManyWithWhereWithoutSedeOrigenInput: ["where", "data"],
  TrasladoUpsertWithWhereUniqueWithoutSedeInput: ["where", "update", "create"],
  TrasladoUpdateWithWhereUniqueWithoutSedeInput: ["where", "data"],
  TrasladoUpdateManyWithWhereWithoutSedeInput: ["where", "data"],
  CantidadUpsertWithWhereUniqueWithoutSedeInput: ["where", "update", "create"],
  CantidadUpdateWithWhereUniqueWithoutSedeInput: ["where", "data"],
  CantidadUpdateManyWithWhereWithoutSedeInput: ["where", "data"],
  ProductoCreateManyPrecioAlmacenInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioVentaId"],
  ProductoUpdateWithoutPrecioAlmacenInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioVenta"],
  ProductoCreateManyPrecioVentaInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "subcategoriaId", "precioAlmacenId"],
  ProductoUpdateWithoutPrecioVentaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "subcategoria", "precioAlmacen"],
  ProductoCreateManyOrigenInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoUpdateWithoutOrigenInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  SubcategoriaCreateManyCategoriaInput: ["id", "nombre"],
  ProductoCreateManyCategoriaInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  SubcategoriaUpdateWithoutCategoriaInput: ["nombre", "Producto"],
  ProductoUpdateWithoutCategoriaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "subcategoria", "precioVenta", "precioAlmacen"],
  ProductoCreateManySubcategoriaInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "marcaId", "origenId", "categoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoUpdateWithoutSubcategoriaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "marca", "origen", "categoria", "precioVenta", "precioAlmacen"],
  SedeCreateManyEstadoInput: ["id", "nombre"],
  SedeUpdateWithoutEstadoInput: ["nombre", "movimientosDestino", "movimientosOrigen", "traslados", "Cantidad"],
  ProductoCreateManyMarcaInput: ["id", "modelo", "foto", "cuenta", "retirado", "cantidad", "origenId", "categoriaId", "subcategoriaId", "precioVentaId", "precioAlmacenId"],
  ProductoUpdateWithoutMarcaInput: ["modelo", "foto", "cuenta", "retirado", "cantidad", "Cantidad", "origen", "categoria", "subcategoria", "precioVenta", "precioAlmacen"],
  CantidadCreateManyProductoInput: ["id", "cantidad", "sedeId"],
  CantidadUpdateWithoutProductoInput: ["cantidad", "sede"],
  TrasladoCreateManySedeDestinoInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeOrigenId"],
  TrasladoCreateManySedeOrigenInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeId", "sedeDestinoId"],
  TrasladoCreateManySedeInput: ["id", "confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeOrigenId", "sedeDestinoId"],
  CantidadCreateManySedeInput: ["id", "cantidad", "productoId"],
  TrasladoUpdateWithoutSedeDestinoInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeOrigen"],
  TrasladoUpdateWithoutSedeOrigenInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sede", "sedeDestino"],
  TrasladoUpdateWithoutSedeInput: ["confirmacion", "fechaEnvio", "fechaConfirmacion", "sedeOrigen", "sedeDestino"],
  CantidadUpdateWithoutSedeInput: ["cantidad", "producto"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

